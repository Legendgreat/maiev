import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserToGroup } from '../user-to-group/user-to-group.entity';
import { SecretOwner } from '../secrets/entities/secret-owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserToGroup])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
