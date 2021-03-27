import {Role} from './Role'
import {Group} from './Group'

export type User = {
  id: number
  name: string
  last_name: string
  nick_name: string
  email: string
  cpf: string
  password?:string
}

export type UserNew = {
  id: number
  name: string
  last_name: string
  nick_name: string
  email: string
  cpf: string
  password:string
  password_confirm:string
  group?:Group[]
  role?: Role[]
}
