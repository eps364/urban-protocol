import { Role } from "./Role";
import { User } from "./User";

export type Log = {
    id: number
    role: Role
    url: string
    user: User
    request: string
    response: string
}