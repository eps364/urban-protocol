import { NextApiRequest, NextApiResponse } from 'next'
import { Role } from '../../interfaces/Role'
import dbRole from '../../../db/role.json'

// interface ResponseType {
//     message: string
// }

const roles: Role[] = dbRole

export default (req: NextApiRequest, res: NextApiResponse<Role[]>): void => {
    console.log(req.body)
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