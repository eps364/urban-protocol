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

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/roles')
    const data = await res.json()
  
    return {
        props: {
            roles: data
        }
    }
  }