/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/resources/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(identifier: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByIdentifier(identifier);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (!bcrypt.compare(user?.password, password)) {
      throw new UnauthorizedException();
    }
    const payload = { ...user, password: undefined };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }
}
