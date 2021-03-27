import {User} from './User'
import {Department} from './Department'

export type Protocol = {
  id: number
  title: string
  description: string
  user: User
  persona: User
  department: Department
  responsible: User
  ProtocolsChildren: Protocol[]
}
