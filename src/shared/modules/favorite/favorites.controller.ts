import { inject } from 'inversify';
import {BaseController,HttpError,HttpMethod,ValidateObjectIdMiddleware,ValidateDtoMiddleware} from '../../libs/rest/index.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { Request, Response } from 'express';
import { fillDTO } from '../../helpers/index.js';
import { StatusCodes } from 'http-status-codes';
import { DefaultFavoriteService } from './deafault-favorite.service.js';
import { FavoriteDto } from './index.js';
import { FavoriteRdo } from './rdo/favorite.rdo.js';
import { CreateFavoriteRequest, DeleteFavoriteRequest } from '../../types/favorite.type.js';

export class FavoriteController extends BaseController {
  constructor(
        @inject(Component.Logger) protected readonly logger: Logger,
        @inject(Component.FavoriteService) private readonly favoriteService: DefaultFavoriteService,
  ) {
    super(logger);

    this.logger.info('Register routes for FavoriteController…');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });

    this.addRoute({
      path: '/:offerId',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        new ValidateObjectIdMiddleware('offerId'),
        new ValidateDtoMiddleware(FavoriteDto)
      ]
    });

    this.addRoute({
      path: '/:offerId',
      method: HttpMethod.Delete,
      handler: this.delete,
      middlewares: [
        new ValidateObjectIdMiddleware('offerId'),
        new ValidateDtoMiddleware(FavoriteDto)
      ]
    });
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const userId = '785578ywrw3yf4w';
    const userFavorites = await this.favoriteService.findByUserId(userId);
    const responseData = fillDTO(FavoriteRdo , userFavorites);

    this.ok(res, responseData);
  }

  public async create({ body }: CreateFavoriteRequest, res: Response): Promise<void> {
    const existsUserOffer = await this.favoriteService.findByUserId(body.offerId);

    if (existsUserOffer) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `User with favorite offer «${body.offerId}» exists.`,
        'UserController'
      );
    }
    const result = await this.favoriteService.create(body);
    this.created(res, fillDTO(FavoriteRdo, result));
  }

  public async delete({ body }: DeleteFavoriteRequest, res: Response): Promise<void> {
    const existsUser = await this.favoriteService.delete(body);

    if (existsUser) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `User with favorite offer «${body.offerId}» exists.`,
        'UserController'
      );
    }
    await this.favoriteService.delete(body);
    this.noContent(res, null);
  }
}
