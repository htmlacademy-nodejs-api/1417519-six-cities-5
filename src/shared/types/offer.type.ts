import { Request } from 'express';
import { CitiesName, Comforts, HouseType } from '../helpers/enum.js';
import { Coordinates } from './coordinates.type.js';
import { User } from './user.type.js';
import { ParamsDictionary } from 'express-serve-static-core';
import { RequestBody, RequestParams } from '../libs/rest/index.js';
import { CreateOfferDto } from '../modules/offer/index.js';

export type Offer = {
  title: string;
  description: string;
  date: Date;
  city: CitiesName;
  previewImage: string[];
  photosHouses: string[];
  isPremium: boolean;
  isFavorite: boolean;
  houseType: HouseType;
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


export type CreateOfferRequest = Request<RequestParams, RequestBody, CreateOfferDto>;

export type ParamCityName = { cityName: string } | ParamsDictionary;
