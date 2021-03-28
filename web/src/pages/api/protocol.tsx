import { NextApiRequest, NextApiResponse } from 'next'
import { Protocol } from '../../interfaces/Protocol'

interface ResponseType {
    message: string
}


export default (req: NextApiRequest, res: NextApiResponse<ResponseType>): void => {
    const protocol: Protocol = {  }
    console.log(user)
    return res.status(200).json(user)
}