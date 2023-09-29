import { Coordinates } from './coordinates.type.js';
import { User } from './user.type.js';

export type Offer = {
  title: string;
  description: string;
  date: Date;
  city: string;
  previewImage: string;
  photosHouses: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  houseType: string;
  numberRooms: number;
  numberGuests: number;
  rentPrice: number;
  listAmenities: string[];
  user: User;
  locations: Coordinates;
}
