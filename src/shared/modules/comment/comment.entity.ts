import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { OfferEntity } from '../offer/offer.entity.js';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface CommentEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public text!: string;

  @prop({required: true,min: 1,max: 5})
  public grade!: number;

  @prop({ref: OfferEntity,required: true})
  public offerId!: Ref<OfferEntity>;

  @prop({ref: UserEntity,required: true,})
  public userId!: Ref<UserEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
