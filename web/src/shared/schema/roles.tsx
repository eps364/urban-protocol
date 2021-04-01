import { number, object, string, TypeOf } from 'yup';

export const rolesSchema = object({
  id: number().required(),
  name: string().required().min(3).max(254),
  description: string().required().min(3).max(254),
  father: string().required().min(3).max(254),
  menuDescription: string().required().min(3).max(254),
  pageContext: string().required().min(3).max(254),
  icon: string().required().min(3).max(254),
}).camelCase();

export type Roles = TypeOf<typeof rolesSchema>;
