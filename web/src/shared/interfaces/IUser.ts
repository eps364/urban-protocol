import { IRole } from './IRole';
import { IGroup } from './IGroup';

export type IUser = {
  id: number;
  name: string;
  last_name: string;
  nick_name: string;
  email: string;
  cpf: string;
  password?: string;
};

export type UserNew = {
  id: number;
  name: string;
  last_name: string;
  nick_name: string;
  email: string;
  cpf: string;
  password: string;
  password_confirm: string;
  group?: IGroup[];
  role?: IRole[];
};
