import { inject } from 'inversify';
import { BaseController } from '../../libs/rest/index.js';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { DefaultFavoriteService } from './deafault-favorite.service.js';
import { DefaultOfferService } from '../offer/default-offer.service.js';

export class FavoriteController extends BaseController{
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.FavoriteService) protected readonly favoriteService: DefaultFavoriteService,
    @inject(Component.OfferService) protected readonly offerService: DefaultOfferService ,
  ){
    super(logger);
  }

}
