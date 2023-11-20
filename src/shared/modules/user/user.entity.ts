import {defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { User } from '../../types/index.js';
import { createSHA256 } from '../../helpers/index.js';
import { UserRole } from '../../helpers/enum.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions:{
    collection: 'users'
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User{
  @prop({required: true, default: '' })
  public userName!: string;

  @prop({unique:true, required: true})
  public email!: string;

  @prop({required:false, default:''})
  public avatar!: string;

  @prop({
    required: true,
    type: () => String,
    enum: UserRole})
  public userType!: UserRole;

  @prop({require:true, default: ''})
  public password?: string;

  constructor(userData: User){
    super();

    this.email = userData.email;
    this.avatar = userData.avatar;
    this.userName = userData.userName;
    this.userType = userData.userType;
  }

  public setPassword(password: string, salt: string){
    this.password = createSHA256(password , salt);
  }

  public getPassword(){
    return this.password;
  }

  public verifyPassword(password: string, salt: string) {
    const hashPassword = createSHA256(password, salt);
    return hashPassword === this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
