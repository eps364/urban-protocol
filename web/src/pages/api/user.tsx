import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../interfaces/User'

interface ResponseType {
    message: string
}

const users: User = []

export default (req: NextApiRequest, res: NextApiResponse<ResponseType>): void => {
    const user: User = { id: 1, name: "Emerson", email: "pereiradasilva.emerson@gmail.com", last_name: "Silva", cpf: "123456789012", nick_name: "eps364" }
    console.log(user)
    return res.status(200).json(user)
}