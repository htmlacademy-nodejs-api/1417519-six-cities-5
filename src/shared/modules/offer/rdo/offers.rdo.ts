import { Expose } from 'class-transformer';
import { Coordinates } from '../../../types/index.js';

export class OfferRdo {
  @Expose({ name: '_id'})
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public date!: string;

  @Expose()
  public city!: string;

  @Expose()
  public previewImage!: string;

  @Expose()
  public photosHouses!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public isFavorite!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public houseType!: string;

  @Expose()
  public numberRooms!: number;

  @Expose()
  public numberGuests!: number;

  @Expose()
  public rentPrice!: number;

  @Expose()
  public listAmenities!: string[];

  @Expose()
  public location!: Coordinates;

}
