import {
  MAX_OFFER_DESCRIPTION_LENGTH,
  MAX_OFFER_GUESTS_COUNT,
  MAX_OFFER_PRICE,
  MAX_OFFER_ROOMS_COUNT,
  MAX_OFFER_TITLE_LENGTH,
  MIN_OFFER_DESCRIPTION_LENGTH,
  MIN_OFFER_GUESTS_COUNT,
  MIN_OFFER_PRICE,
  MIN_OFFER_ROOMS_COUNT,
  MIN_OFFER_TITLE_LENGTH,
  OFFER_PHOTOS_COUNT } from '../offer.constant.js';

export const UpdateOfferValidationMessage = {
  title: {
    minLength: `Minimum title length must be ${MIN_OFFER_TITLE_LENGTH}`,
    maxLength: `Maximum title length must be ${MAX_OFFER_TITLE_LENGTH}`,
  },
  description: {
    minLength: `Minimum description length must be ${MIN_OFFER_DESCRIPTION_LENGTH}`,
    maxLength: `Maximum description length must be ${MAX_OFFER_DESCRIPTION_LENGTH}`,
  },
  previewImage: {
    maxLength: 'Too short for field «previewImage»',
  },
  photosHouses: {
    invalidFormat: 'photosHouses must be an array',
    maxLength: 'Too short for field «photosHouses»',
    invalidSize: `Should always be ${OFFER_PHOTOS_COUNT} images`,
  },
  rentPrice: {
    invalidFormat: 'rentPrice must be an integer',
    minValue: `Minimum rentPrice is ${MIN_OFFER_PRICE}`,
    maxValue: `Maximum rentPrice is ${MAX_OFFER_PRICE}`,
  },
  city: {
    invalid: 'City must be one of: Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf',
  },
  houseType: {
    invalid: 'houseType must be one of: apartment, house, room, hotel',
  },
  isPremium: {
    invalidFormat: 'isPremium must be a boolean',
  },
  listAmenities: {
    invalidFormat: 'listAmenities must be an array',
    invalid: 'Must be Breakfast, Air conditioning, Laptop friendly workspace, Baby seat, Washer, Towels, Fridge',
  },
  numberGuests: {
    invalidFormat: 'Guests must be an integer',
    minValue: `Minimum guest amount is ${MIN_OFFER_GUESTS_COUNT}`,
    maxValue: `Maximum guest amount is ${MAX_OFFER_GUESTS_COUNT}`,
  },
  numberRooms: {
    invalidFormat: 'numberRooms must be an integer',
    minValue: `Minimum numberRooms amount is ${MIN_OFFER_ROOMS_COUNT}`,
    maxValue: `Maximum numberRooms amount is ${MAX_OFFER_ROOMS_COUNT}`,
  },
  location: {
    invalidFormat: 'Latitude or longitude must be a coordinate',
  }
} as const;
