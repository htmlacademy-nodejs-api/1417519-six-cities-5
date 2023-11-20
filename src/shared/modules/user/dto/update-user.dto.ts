import { UserRole } from '../../../helpers/enum.js';

export class UpdateUserDto {
  public name?: string;
  public avatar?: string;
  public userType?: UserRole;
}
