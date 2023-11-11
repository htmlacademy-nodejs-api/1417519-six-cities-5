import { inject, injectable } from 'inversify';
import { BaseController, HttpError, HttpMethod } from '../../libs/rest/index.js';
import { Logger } from '../../libs/logger/index.js';
import { Component } from '../../types/component.enum.js';
import { CommentService } from './comment-service.interface.js';
import { Response } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';
import { fillDTO } from '../../helpers/common.js';
import { OfferService } from '../offer/offer-service.interface.js';
import { CommentRdo } from './rdo/comment.rdo.js';
import { CreateCommentRequest } from '../../types/comment.type.js';


@injectable()
export default class CommentController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.CommentService) private readonly commentService: CommentService,
    @inject(Component.OfferService) private readonly offerService: OfferService,

  ){
    super(logger);

    this.logger.info('Register routes for CommentController…');
    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
  }

  public async create(
    { body }: CreateCommentRequest,
    res: Response
  ): Promise<void> {

    if (! await this.offerService.exists(body.offerId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${body.offerId} not found.`,
        'CommentController'
      );
    }

    const comment = await this.commentService.create(body);
    await this.offerService.incCommentCount(body.offerId);
    this.created(res, fillDTO(CommentRdo, comment));
  }
}
