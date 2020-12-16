import { IBase } from './base';
import { IUser } from './user';

export interface IItem extends IBase {
  peopleWhoIncremented: string[];
  title: string;
  userId: IUser;
}