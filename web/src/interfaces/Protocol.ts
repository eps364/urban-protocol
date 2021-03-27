import {User} from './User'
import {Department} from './Department'
import { File } from './File'

enum typeProtocol {
  protocolo,
  lei,
}

export type Protocol = {
  id: number
  title: string
  type: typeProtocol
  description: string
  user: User
  persona: User
  department: Department
  responsible: User
  ProtocolsChildren: Protocol[]
  file: File[]
}
