import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { Group } from './entities/group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserToGroup } from '../user-to-group/user-to-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group, UserToGroup])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
