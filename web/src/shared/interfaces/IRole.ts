export type IRole = {
  id: number
  name: RoleName | string
  description: string
  father: string
  menuDescription: string
  pageContext:string
  icon?:string
}

export enum RoleName {
  ROLE_HOME,
  ROLE_CREATE_USER,
  ROLE_READ_USER,
  ROLE_UPDATE_USER,
  ROLE_DELETE_USER,

  ROLE_CREATE_GROUP,
  ROLE_READ_GROUP,
  ROLE_UPDATE_GROUP,
  ROLE_DELETE_GROUP,

  ROLE_CREATE_PROTOCOL,
  ROLE_READ_PROTOCOL,
  ROLE_UPDATE_PROTOCOL,
  ROLE_DELETE_PROTOCOL,
}
