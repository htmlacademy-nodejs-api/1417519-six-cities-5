import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';
import { OfferEntity } from '../offer/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface FavoriteEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'favorites',
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class FavoriteEntity extends defaultClasses.TimeStamps {
  @prop({
    ref: OfferEntity,
    required: true
  })
  public offerId!: Ref<OfferEntity>;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;
}

export const FavoriteModel = getModelForClass(FavoriteEntity);
