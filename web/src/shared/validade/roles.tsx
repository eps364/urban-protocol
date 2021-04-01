import { NextApiRequest, NextApiResponse } from 'next';
import { rolesSchema } from '../schema/roles';
import { validate } from '../middleware/validate';

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ ...req.body, method: req.method });
};

export default validate(rolesSchema, handle);
