import { DocumentType, types } from '@typegoose/typegoose';
import { Component } from '../../types/component.enum.js';
import { inject, injectable } from 'inversify';
import { FavoriteEntity } from './favorite.entity.js';
import { FavoriteService } from './favorite-service.interface.js';
import { FavoriteDto } from './dto/favorite.dto.js';
import { commentsPipeline, favoritesPipeline, offerPipeline } from './favorite.aggregation.js';

@injectable()
export class DefaultFavoriteService implements FavoriteService {
  constructor(
    @inject(Component.FavoriteModel) private readonly favoriteModel: types.ModelType<FavoriteEntity>
  ) {}

  public async findByUserId(userId: string): Promise<DocumentType<FavoriteEntity>[]> {
    return await this.favoriteModel
      .aggregate([
        ...offerPipeline,
        ...favoritesPipeline(userId),
        ...commentsPipeline
      ])
      .exec();
  }

  public async findByUserOfferId(userId: string, offerId: string): Promise<DocumentType<FavoriteEntity>[]> {
    return await this.favoriteModel
      .find({ userId, offerId })
      .exec();
  }

  public async create(dto: FavoriteDto): Promise<DocumentType<FavoriteEntity> | null> {
    return await this.favoriteModel.create(dto);
  }

  public async delete(dto: FavoriteDto): Promise<DocumentType<FavoriteEntity> | null> {
    return await this.favoriteModel.findOneAndDelete(dto).exec();
  }
}
