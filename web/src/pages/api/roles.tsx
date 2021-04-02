import { NextApiRequest, NextApiResponse } from 'next'
import { IRole } from '../../shared/interfaces/IRole'
import dbRole from '../../../db/role.json'

// interface ResponseType {
//     message: string
// }

const roles: IRole[] = dbRole

export default (req: NextApiRequest, res: NextApiResponse<IRole[]>): void => {
    console.log(req.body)
    return res.status(200).json(roles)
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/roles`)
    const data = await res.json()
  
    return {
        props: {
            roles: data
        }
    }
  }