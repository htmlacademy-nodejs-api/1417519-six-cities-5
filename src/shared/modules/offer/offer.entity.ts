import { defaultClasses, getModelForClass, modelOptions, prop, Ref, Severity } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';
import { Coordinates } from '../../types/coordinates.type.js';
import { CitiesName, Comforts, HouseType } from '../../helpers/enum.js';


// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  },
  options: {
    allowMixed: Severity.ALLOW
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps{
  @prop({
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 100,
  })
  public title!: string;

  @prop({
    required: true,
    trim: true,
    minlength: 20,
    maxlength: 1024,
  })
  public description!: string;

  @prop({ required: true })
  public date!: Date;

  @prop({
    required: true,
    type: () => String,
    enum: CitiesName
  })
  public city!: CitiesName;

  @prop({ required: true })
  public previewImage!: string;

  @prop({
    required: true,
    type: [String]
  })
  public photosHouses!: string[];

  @prop({ required: true })
  public isPremium!: boolean;

  @prop({
    required: true,
    type: () => String,
    enum: HouseType
  })
  public houseType!:HouseType;

  @prop({
    required: true,
    min: 1,
    max: 8,
  })
  public numberRooms!: number;

  @prop({
    required: true,
    min: 1,
    max: 10,
  })
  public numberGuests!: number;

  @prop({
    required: true,
    min: 100,
    max: 100000,
  })
  public rentPrice!: number;

  @prop({
    required: true,
    type: () => String,
    default: [],
    enum: Comforts
  })
  public listAmenities!: string[];

  @prop({
    ref: UserEntity,
  })
  public user!: Ref<UserEntity>;

  @prop({
    required: true
  })
  public locations!: Coordinates;
}


export const OfferModel = getModelForClass(OfferEntity);
