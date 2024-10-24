import { ApiProperty } from '@nestjs/swagger'
import { User } from 'src/resources/users/entities/user.entity'

export class SignInDto {
  @ApiProperty()
  username: string

  @ApiProperty()
  password: string
}
