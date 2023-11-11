import { inject, injectable } from 'inversify';
import { BaseController, HttpError, HttpMethod } from '../../libs/rest/index.js';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { Request, Response } from 'express';
import { DefaultOfferService } from './default-offer.service.js';
import { CreateOfferDto, OfferRdo } from './index.js';
import { fillDTO } from '../../helpers/common.js';
import { OfferId, ParamCity } from '../../types/offer.type.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';
import { OfferPreviewRdo } from './rdo/offer-previw.rdo.js';
import { CommentService } from '../comment/comment-service.interface.js';
import { StatusCodes } from 'http-status-codes';
import { CommentRdo } from '../comment/index.js';

@injectable()
export class OfferController extends BaseController{
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.OfferService) private readonly offerService: DefaultOfferService,
    @inject(Component.CommentService) private readonly commentService: CommentService,
  ){
    super(logger);

    this.logger.info('Register router for OfferController...');
    this.addRoute({path: '/', method: HttpMethod.Get, handler: this.index});
    this.addRoute({path: '/', method:HttpMethod.Post, handler: this.create});
    this.addRoute({path: '/:offerId', method:HttpMethod.Get, handler: this.findById});
    this.addRoute({path: '/:offerId', method:HttpMethod.Put, handler: this.updateById});
    this.addRoute({path: '/:offerId', method:HttpMethod.Delete, handler: this.deleteById});
    this.addRoute({path: '/premium/:cityName', method:HttpMethod.Get, handler: this.getPremium});
    this.addRoute({ path: '/:offerId/comments', method: HttpMethod.Get, handler: this.getComments });
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const offers = await this.offerService.find();
    const responseData = fillDTO(OfferRdo, offers);
    this.ok(res, responseData);
  }

  public async create({body}: Request<Record<string,unknown>,CreateOfferDto>,res: Response): Promise<void> {
    const result = await this.offerService.create(body);
    const newOffer = await this.offerService.findById(result.id);

    this.created(res, fillDTO(OfferRdo, newOffer));
  }

  public async findById({ params }: Request<OfferId>, res: Response):Promise<void>{
    const { offerId } = params;
    const existOffer = await this.offerService.findById(offerId);
    this.ok(res, fillDTO(OfferRdo, existOffer));
  }

  public async getPremium({ params }: Request<ParamCity>, res: Response): Promise<void> {
    const { cityName } = params;
    const premium = await this.offerService.findPremiumByCity(cityName);

    this.ok(res, fillDTO(OfferPreviewRdo, premium));
  }

  public async deleteById({ params }: Request<OfferId>, res: Response): Promise<void> {
    const { offerId } = params;

    await this.offerService.deleteById(offerId);

    await this.commentService.deleteByOfferId(offerId);

    this.noContent(res, {});
  }

  public async updateById({ body, params }: Request<OfferId, unknown, UpdateOfferDto>, res: Response): Promise<void> {
    const { offerId } = params;

    const updatedOffer = await this.offerService.updateById(offerId, body);

    this.ok(res, fillDTO(OfferRdo, updatedOffer));
  }


  public async getComments({ params }: Request<OfferId>, res: Response): Promise<void> {
    if (!await this.offerService.exists(params.offerId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${params.offerId} not found.`,
        'OfferController'
      );
    }

    const comments = await this.commentService.findByOfferId(params.offerId);
    this.ok(res, fillDTO(CommentRdo, comments));
  }
}
