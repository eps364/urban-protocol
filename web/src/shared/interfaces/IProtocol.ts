import { IUser } from './IUser';
import { IDepartment } from './IDepartment';
import { IFile } from './IFile';

enum typeProtocol {
  protocolo,
  lei,
}

export type IProtocol = {
  id: number;
  status: Status;
  title: string;
  type: typeProtocol;
  description: string;
  user: IUser;
  persona: IUser;
  department: IDepartment;
  responsible: IUser;
  ProtocolsChildren: IProtocol[];
  file: IFile[];
};

enum Status {
  ABERTO,
  FECHADO,
  EXCLUIDO,
}
