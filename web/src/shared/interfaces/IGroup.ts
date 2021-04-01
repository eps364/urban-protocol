import { IRole } from './IRole';

export type IGroup = {
  id: number;
  name: string;
  role: IRole[];
};
