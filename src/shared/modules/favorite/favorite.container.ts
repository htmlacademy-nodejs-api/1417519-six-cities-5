import { Container } from 'inversify';
import { Component } from '../../types/index.js';
import { types } from '@typegoose/typegoose';
import { FavoriteEntity, FavoriteModel } from './favorite.entity.js';
import { FavoriteService } from './favorite-service.interface.js';
import { DefaultFavoriteService } from './deafault-favorite.service.js';
import { FavoriteController } from './favorites.controller.js';
import { Controller } from '../../libs/rest/index.js';

export const createFavoriteContainer = () => {
  const favoriteContainer = new Container();

  favoriteContainer.bind<FavoriteService>(Component.FavoriteService).to(DefaultFavoriteService).inSingletonScope();
  favoriteContainer.bind<types.ModelType<FavoriteEntity>>(Component.FavoriteModel).toConstantValue(FavoriteModel);
  favoriteContainer.bind<Controller>(Component.FavoriteController).to(FavoriteController).inSingletonScope();
  return favoriteContainer;
};
