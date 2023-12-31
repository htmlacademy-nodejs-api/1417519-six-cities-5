import { Coordinates } from '../../../types/coordinates.type.js';
import {
  IsDateString,
  IsEnum,
  IsInt,
  Max,
  MaxLength,
  Min,
  MinLength,
  IsBoolean,
  ValidateNested,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';
import { CreateOfferValidationMessage } from './create-offer.message.js';
import { CitiesName, Comforts, HouseType } from '../../../helpers/enum.js';


export class CreateOfferDto {
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title!: string;

  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description!: string;

  @IsDateString({}, { message: CreateOfferValidationMessage.date.invalidFormat })
  public date!: Date;

  @IsArray({ message: CreateOfferValidationMessage.photosHouses.invalidFormat })
  @MaxLength(256, { message: CreateOfferValidationMessage.photosHouses.maxLength })
  @ArrayMinSize(6, { message: CreateOfferValidationMessage.photosHouses.invalidSize })
  @ArrayMaxSize(6, { message: CreateOfferValidationMessage.photosHouses.invalidSize })
  public photosHouses!: string[];

  @IsEnum(CitiesName, { message: CreateOfferValidationMessage.city.invalid })
  public city!: CitiesName;

  @MaxLength(256, { message: CreateOfferValidationMessage.previewImage.maxLength })
  public previewImage!: string[];

  @IsBoolean({ message: CreateOfferValidationMessage.isPremium.invalidFormat })
  public isPremium!: boolean;

  @IsEnum(HouseType, { message: CreateOfferValidationMessage.houseType.invalid })
  public houseType!: HouseType;

  @IsInt({ message: CreateOfferValidationMessage.numberRooms.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.numberRooms.minValue })
  @Max(8, { message: CreateOfferValidationMessage.numberRooms.maxValue })
  public numberRooms!: number;

  @IsInt({ message: CreateOfferValidationMessage.numberGuests.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.numberGuests.minValue })
  @Max(10, { message: CreateOfferValidationMessage.numberGuests.maxValue })
  public numberGuests!: number;

  @IsInt({ message: CreateOfferValidationMessage.rentPrice.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.rentPrice.minValue })
  @Max(100000, { message: CreateOfferValidationMessage.rentPrice.maxValue })
  public rentPrice!: number;

  @IsArray({ message: CreateOfferValidationMessage.listAmenities.invalidFormat })
  @IsEnum(Comforts, { each: true, message: CreateOfferValidationMessage.listAmenities.invalid })
  public listAmenities!: Comforts[];

  public userId!: string;

  @ValidateNested({message: CreateOfferValidationMessage.locations.invalidFormat})
  public locations!: Coordinates;
}
