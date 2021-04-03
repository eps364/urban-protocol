import { IRole } from './IRole';
import { IGroup } from './IGroup';
import { IDepartment } from './IDepartment';

export type IUser = {
  id: number;
  name: string;
  last_name: string;
  nick_name: string;
  email: string;
  cpf: string;
  dob: string;
  password?: string;
  departamentId?: IDepartment;
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
  departamentId?: IDepartment;
  group?: IGroup[];
  role?: IRole[];
};
