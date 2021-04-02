import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    try {
      const user = await this.userService.query(username)
      if (user && user.password === pass) {
        const { password, ...result } = user
        return result
      }

      return null

    } catch (e) {
      throw new Error(`failed_validator_in_auth: ${e}`)
    }
  }
}