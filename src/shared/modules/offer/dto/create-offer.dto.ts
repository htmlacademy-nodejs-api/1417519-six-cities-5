import { Coordinates } from '../../../types/coordinates.type.js';

export class CreateOfferDto {
  public title!: string;
  public description!: string;
  public date!: Date;
  public city!: string;
  public previewImage!: string[];
  public photosHouses!: string[];
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public rating!: number;
  public houseType!: string;
  public numberRooms!: number;
  public numberGuests!: number;
  public rentPrice!: number;
  public listAmenities!: string[];
  public user!: string;
  public locations!: Coordinates;
}
