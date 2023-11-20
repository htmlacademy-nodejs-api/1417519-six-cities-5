import { IsEmail, IsEnum, IsString, Length } from 'class-validator';
import { CreateUserMessages } from './create-user.messages.js';
import { UserRole } from '../../../helpers/enum.js';

export class CreateUserDto {
  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email!: string;

  @IsString({ message: CreateUserMessages.avatar.invalidFormat })
  public avatar!: string;

  @IsEnum(UserRole, { message: CreateUserMessages.userType.invalidFormat })
  public userType!: UserRole;

  @IsString({ message: CreateUserMessages.userName.invalidFormat })
  @Length(1, 15, { message: CreateUserMessages.userName.lengthField })
  public userName!: string;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(6, 12, { message: CreateUserMessages.password.lengthField })
  public password!: string;
}
