import { IBase } from './base';

export interface IUser extends IBase {
  items: string[];
  email: string;
  password: string;
}