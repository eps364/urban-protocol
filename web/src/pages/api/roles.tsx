import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../interfaces/User'
import dbRole from '../../../db/role.json'

interface ResponseType {
    message: string
}

const roles: User = dbRole

export default (req: NextApiRequest, res: NextApiResponse<ResponseType>): void => {
    return res.status(200).json(roles)
}