import { Injectable } from '@nestjs/common'
import { UserModel } from '@common/models'

@Injectable()
export class UserService {
  private readonly users: UserModel[] = [
    {
      id: 1,
      name: 'john',
      dob: '26/05/1997',
      departamentId: '0001',
      password: 'teste123'
    },
    {
      id: 2,
      name: 'maria',
      dob: '12/12/2000',
      departamentId: '0002',
      password: 'teste'
    },
  ]

  async findAll(query?: string): Promise<UserModel[]> {
    try {
      return this.users
    } catch (e) {
      throw new Error(`error_in_service_user: ${e}`)
    }
  }

  async query(username?: string): Promise<UserModel> {
    try {
      return this.users.find(({ name }) => name === username)
    } catch (e) {
      throw new Error(`error_query_user: ${e}`)
    }
  }
}