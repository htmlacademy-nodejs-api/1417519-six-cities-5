export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  date: {
    invalidFormat: 'postDate must be a valid ISO date',
  },
  previewImage: {
    maxLength: 'Too short for field previewImage',
  },
  city: {
    invalid: 'City must be one of: Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf',
  },
  photosHouses: {
    invalidFormat: 'photosHouses must be an array',
    maxLength: 'Too short for field «photosHouses»',
    invalidSize: 'Should always be 6 images',
  },
  isPremium: {
    invalidFormat: 'isPremium must be a boolean',
  },
  houseType: {
    invalid: 'houseType must be one of: apartment, house, room, hotel',
  },
  numberRooms: {
    invalidFormat: 'Rooms must be an integer',
    minValue: 'Minimum room amount is 1',
    maxValue: 'Maximum room amount is 8',
  },
  numberGuests: {
    invalidFormat: 'Guests must be an integer',
    minValue: 'Minimum guest amount is 1',
    maxValue: 'Maximum guest amount is 10',
  },
  rentPrice: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },
  listAmenities: {
    invalidFormat: 'Comforts must be an array',
    invalid: 'Must be Breakfast, Air conditioning, Laptop friendly workspace, Baby seat, Washer, Towels, Fridge',
  },
  locations: {
    invalidFormat: 'Latitude or longitude must be a coordinate',
  },
  userId: {
    invalidId: 'authorId field must be a valid id',
  },
} as const;
