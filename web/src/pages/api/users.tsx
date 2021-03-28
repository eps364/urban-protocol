import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../interfaces/User'
import dbUser from '../../../db/user.json'

interface ResponseType {
    message: string
}

const users: User = dbUser

export default (req: NextApiRequest, res: NextApiResponse<ResponseType>): void => {
    console.log(users)
    return res.status(200).json(users)
}