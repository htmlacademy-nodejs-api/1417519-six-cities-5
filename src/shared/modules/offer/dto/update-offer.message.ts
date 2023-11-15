export const UpdateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  previewImage: {
    maxLength: 'Too short for field «previewImage»',
  },
  photosHouses: {
    invalidFormat: 'photosHouses must be an array',
    maxLength: 'Too short for field «photosHouses»',
    invalidSize: 'Should always be 6 images',
  },
  rentPrice: {
    invalidFormat: 'rentPrice must be an integer',
    minValue: 'Minimum rentPrice is 100',
    maxValue: 'Maximum rentPrice is 100000',
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
    minValue: 'Minimum guest amount is 1',
    maxValue: 'Maximum guest amount is 10',
  },
  numberRooms: {
    invalidFormat: 'numberRooms must be an integer',
    minValue: 'Minimum numberRooms amount is 1',
    maxValue: 'Maximum numberRooms amount is 8',
  },
  location: {
    invalidFormat: 'Latitude or longitude must be a coordinate',
  }
} as const;
