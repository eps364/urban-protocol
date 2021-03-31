import { IRole } from "./IRole";
import { IUser } from "./IUser";

export type IResponseError = {
    id: number
    role: IRole
    url: string
    user: IUser
    request: string
    response: string
}