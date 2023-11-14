import { IsMongoId } from 'class-validator';
import { FavoriteMessages } from './favorite.message.js';

export class FavoriteDto {
  userId!: string;

  @IsMongoId({ message: FavoriteMessages.offerId.invalidFormat })
    offerId!: string;
}
