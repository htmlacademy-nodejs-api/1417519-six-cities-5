import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsEnum, IsInt, IsOptional, Max, MaxLength, Min, MinLength, ValidateNested } from 'class-validator';
import { Coordinates } from '../../../types/coordinates.type.js';
import { UpdateOfferValidationMessage } from './update-offer.message.js';
import { CitiesName, Comforts, HouseType } from '../../../helpers/enum.js';
import { CreateOfferValidationMessage } from './create-offer.message.js';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: UpdateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: UpdateOfferValidationMessage.title.maxLength })
  public title?: string;

  @IsOptional()
  @MinLength(20, { message: UpdateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: UpdateOfferValidationMessage.description.maxLength })
  public description?: string;

  @IsOptional()
  @IsEnum(CitiesName, { message: UpdateOfferValidationMessage.city.invalid })
  public city?: CitiesName;

  @IsOptional()
  @MaxLength(256, { message: UpdateOfferValidationMessage.previewImage.maxLength })
  public previewImage?: string;

  @IsOptional()
  @IsArray({ message: UpdateOfferValidationMessage.photosHouses.invalidFormat })
  @MaxLength(256, { message: UpdateOfferValidationMessage.photosHouses.maxLength })
  @ArrayMinSize(6, { message: UpdateOfferValidationMessage.photosHouses.invalidSize })
  @ArrayMaxSize(6, { message: UpdateOfferValidationMessage.photosHouses.invalidSize })
  public photosHouses?: string;

  @IsOptional()
  @IsBoolean({ message: UpdateOfferValidationMessage.isPremium.invalidFormat })
  public isPremium?: boolean;

  @IsOptional()
  @IsEnum(HouseType, { message: UpdateOfferValidationMessage.houseType.invalid })
  public houseType?: HouseType;

  @IsOptional()
  @IsInt({ message: UpdateOfferValidationMessage.numberRooms.invalidFormat })
  @Min(1, { message: UpdateOfferValidationMessage.numberRooms.minValue })
  @Max(8, { message: UpdateOfferValidationMessage.numberRooms.maxValue })
  public numberRooms?: number;

  @IsOptional()
  @IsInt({ message: UpdateOfferValidationMessage.numberGuests.invalidFormat })
  @Min(1, { message: UpdateOfferValidationMessage.numberGuests.minValue })
  @Max(10, { message: UpdateOfferValidationMessage.numberGuests.maxValue })
  public numberGuests?: number;

  @IsOptional()
  @IsInt({ message: UpdateOfferValidationMessage.rentPrice.invalidFormat })
  @Min(100, { message: UpdateOfferValidationMessage.rentPrice.minValue })
  @Max(100000, { message: UpdateOfferValidationMessage.rentPrice.maxValue })
  public rentPrice?: number;

  @IsOptional()
  @IsArray({ message: UpdateOfferValidationMessage.listAmenities.invalidFormat })
  @IsEnum(Comforts, { each: true, message: UpdateOfferValidationMessage.listAmenities.invalid })
  public listAmenities?: string[];

  @IsOptional()
  @ValidateNested({message: CreateOfferValidationMessage.locations.invalidFormat})
  public locations?: Coordinates;
}
