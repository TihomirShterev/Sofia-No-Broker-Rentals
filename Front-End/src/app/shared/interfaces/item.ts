import { IBase } from './base';
import { IUser } from './user';

export interface IItem<T = string> extends IBase {
  peopleWhoIncremented: string[];
  title: string;
  userId: IUser;
}