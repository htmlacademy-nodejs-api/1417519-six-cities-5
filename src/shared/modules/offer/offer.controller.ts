import { inject, injectable } from 'inversify';
import { BaseController, DocumentExistsMiddleware, HttpMethod, UploadFileMiddleware, ValidateDtoMiddleware, ValidateObjectIdMiddleware } from '../../libs/rest/index.js';
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
import { CommentRdo } from '../comment/index.js';
import { Config } from '../../libs/config/config.interface.js';
import { RestSchema } from '../../libs/config/rest.schema.js';
import { ValidateCityMiddleware } from '../../libs/rest/middleware/validate-city.middleware.js';
import { UploadImageRdo } from './rdo/upload-image.rdo.js';

@injectable()
export class OfferController extends BaseController{
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.OfferService) private readonly offerService: DefaultOfferService,
    @inject(Component.CommentService) private readonly commentService: CommentService,
    @inject(Component.Config) private readonly configService: Config<RestSchema>,
  ){
    super(logger);

    this.logger.info('Register router for OfferController...');

    this.addRoute({
      path: '/',
      method: HttpMethod.Get,
      handler: this.index});

    this.addRoute({
      path: '/', method:HttpMethod.Post,
      handler: this.create,
      middlewares: [new ValidateDtoMiddleware(CreateOfferDto)]});

    this.addRoute({
      path: '/:offerId', method:HttpMethod.Get,
      handler: this.findById,
      middlewares:[
        new ValidateObjectIdMiddleware('offerId'),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId')]});

    this.addRoute({
      path: '/:offerId', method:HttpMethod.Put,
      handler: this.updateById,
      middlewares: [
        new ValidateObjectIdMiddleware('offerId'),
        new ValidateDtoMiddleware(UpdateOfferDto),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId'),]});

    this.addRoute({
      path: '/:offerId',
      method:HttpMethod.Delete,
      handler: this.deleteById,
      middlewares:[
        new ValidateObjectIdMiddleware('offerId'),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId')],});

    this.addRoute({
      path: '/premium/:cityName',
      method:HttpMethod.Get,
      handler: this.getPremium,
      middlewares: [
        new ValidateCityMiddleware('cityName')
      ]},
    );
    this.addRoute({
      path: '/:offerId/comments',
      method: HttpMethod.Get,
      handler: this.getComments,
      middlewares: [
        new ValidateObjectIdMiddleware('offerId'),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId')
      ]
    });

    this.addRoute({
      path: '/:offerId/photos',
      method: HttpMethod.Post,
      handler: this.uploadImage,
      middlewares: [
        new ValidateObjectIdMiddleware('offerId'),
        new UploadFileMiddleware(this.configService.get('UPLOAD_DIRECTORY'), 'photos'),
      ]
    });
  }

  public async uploadImage({ params, file } : Request<OfferId>, res: Response) {
    const { offerId } = params;
    const updateDto = { photosHouses: file?.filename };
    await this.offerService.updateById(offerId, updateDto);

    this.created(res, fillDTO(UploadImageRdo, updateDto));
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
    console.log(offerId);
    const updatedOffer = await this.offerService.updateById(offerId, body);

    this.ok(res, fillDTO(OfferRdo, updatedOffer));
  }


  public async getComments({ params }: Request<OfferId>, res: Response): Promise<void> {
    const comments = await this.commentService.findByOfferId(params.offerId);
    this.ok(res, fillDTO(CommentRdo, comments));
  }
}
