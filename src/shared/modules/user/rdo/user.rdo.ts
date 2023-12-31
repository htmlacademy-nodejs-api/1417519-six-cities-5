import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public userId!: string;

  @Expose()
  public email!: string;

  @Expose()
  public userName!: string;

  @Expose()
  public avatar!: string;

  @Expose()
  public userType!: string;
}
