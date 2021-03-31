import { NextApiRequest, NextApiResponse } from 'next'
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object'
import { rolesSchema } from '../schema/roles'

const handle = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ ...req.body, method: req.method })
}

export async function validate(schema: OptionalObjectSchema<ObjectShape>) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        if (['POST', 'PUT'].includes(req.method)) {
            try {
                req.body = await schema.validate(req.body,
                    {
                        stripUnknown: true,
                        abortEarly: false
                    })
            } catch (error) {
                return res.status(400).json(error)
            }
        }
        await handle(req, res)
    }
}

export default validate(rolesSchema, handle)
