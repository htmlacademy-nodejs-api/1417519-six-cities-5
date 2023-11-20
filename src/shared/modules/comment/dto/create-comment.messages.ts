import {
  MAX_COMMENT_RATING,
  MAX_TEXT_LENGTH,
  MIN_COMMENT_RATING,
  MIN_TEXT_LENGTH } from '../comment.constant.js';

export const CreateCommentMessages = {
  text: {
    invalidFormat: 'text is required',
    lengthField: `min length is ${MIN_TEXT_LENGTH}, max is ${MAX_TEXT_LENGTH}`
  },
  commentRating: {
    invalidFormat: 'commentRating field must be an integer',
    minValue: `Minimum commentRating is ${MIN_COMMENT_RATING}`,
    maxValue: `Maximum commentRating is ${MAX_COMMENT_RATING}`,
  },
  offerId: {
    invalidFormat: 'offerId field must be a valid id'
  },
  userId: {
    invalidFormat: 'userId field must be a valid id'
  },
} as const;
