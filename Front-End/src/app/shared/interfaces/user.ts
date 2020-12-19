import { IBase } from './base';

export interface IUser extends IBase {
  email: string;
  password: string;
  items: string[];
  myItems: Number;
}