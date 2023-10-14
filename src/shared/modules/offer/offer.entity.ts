import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';
import { Coordinates } from '../../types/coordinates.type.js';


// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps{
  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop()
  public date!: Date;

  @prop()
  public city!: string;

  @prop()
  public previewImage!: string;

  @prop()
  public photosHouses!: string[];

  @prop()
  public isPremium!: boolean;

  @prop()
  public isFavorite!: boolean;

  @prop()
  public rating!: number;

  @prop()
  public houseType!: string;

  @prop()
  public numberRooms!: number;

  @prop()
  public numberGuests!: number;

  @prop()
  public rentPrice!: number;

  @prop()
  public listAmenities!: string[];

  @prop({
    ref: UserEntity
  })
  public user!: Ref<UserEntity>;

  @prop()
  public locations!: Coordinates;
}


export const OfferModel = getModelForClass(OfferEntity);
