import { Coordinates } from '../../../types/coordinates.type.js';

export class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public city?: string;
  public previewImage?: string[];
  public photosHouses?: string[];
  public isPremium?: boolean;
  public houseType?: string;
  public numberRooms?: number;
  public numberGuests?: number;
  public rentPrice?: number;
  public listAmenities?: string[];
  public locations?: Coordinates;
}
