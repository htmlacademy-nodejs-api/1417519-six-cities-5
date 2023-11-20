import { Expose } from 'class-transformer';
import { CitiesName, HouseType } from '../../../helpers/enum.js';

export class OfferPreviewRdo {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public houseType!: HouseType;

  @Expose()
  public date!: string;

  @Expose()
  public city!: CitiesName;

  @Expose()
  public previewImage!: string;

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public isFavorite!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public rentPrice!: number;

  @Expose()
  public commentCount!: number;
}
