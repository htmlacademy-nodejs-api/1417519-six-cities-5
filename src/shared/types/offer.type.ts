import { Comforts } from '../helpers/enum.js';
import { Coordinates } from './coordinates.type.js';
import { User } from './user.type.js';
import { ParamsDictionary } from 'express-serve-static-core';

export type Offer = {
  title: string;
  description: string;
  date: Date;
  city: string;
  previewImage: string[];
  photosHouses: string[];
  isPremium: boolean;
  houseType: string;
  numberRooms: number;
  numberGuests: number;
  rentPrice: number;
  listAmenities: Comforts[];
  user: User;
  locations: Coordinates;
}


export type OfferId = {
  offerId: string;
} | ParamsDictionary;

export type ParamCity = {
   cityName: string
   } | ParamsDictionary;
