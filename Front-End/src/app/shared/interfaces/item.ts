import { IBase } from './base';
import { IUser } from './user';

export interface IItem extends IBase {
  title: string;
  imageURL: string;
  description: string;
  peopleWhoIncremented: string[];
  userId: IUser;
}