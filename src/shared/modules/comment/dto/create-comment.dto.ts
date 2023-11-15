import { IsInt, IsMongoId, IsString, Length, Max, Min } from 'class-validator';
import { CreateCommentMessages } from './create-comment.messages.js';

export class CreateCommentDto {
  @IsString({ message: CreateCommentMessages.text.invalidFormat })
  @Length(5, 1024, { message: 'min is 5, max is 1024 '})
  public text!: string;

  @IsInt({ message: CreateCommentMessages.commentRating.invalidFormat })
  @Min(1, { message: CreateCommentMessages.commentRating.minValue })
  @Max(5, { message: CreateCommentMessages.commentRating.maxValue })
  public commentRating!: number;

  @IsMongoId({ message: CreateCommentMessages.userId.invalidFormat })
  public userId!: string;

  @IsMongoId({ message: CreateCommentMessages.offerId.invalidFormat })
  public offerId!: string;
}
