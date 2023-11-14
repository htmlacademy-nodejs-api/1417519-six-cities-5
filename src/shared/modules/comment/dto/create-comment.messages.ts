export const CreateCommentMessages = {
  text: {
    invalidFormat: 'text is required',
    lengthField: 'min length is 5, max is 2024'
  },
  commentRating: {
    invalidFormat: 'commentRating field must be an integer',
    minValue: 'Minimum commentRating is 1',
    maxValue: 'Maximum commentRating is 5',
  },
  offerId: {
    invalidFormat: 'offerId field must be a valid id'
  },
  userId: {
    invalidFormat: 'userId field must be a valid id'
  },
} as const;
