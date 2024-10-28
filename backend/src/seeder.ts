import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { options } from 'src/db/data-source';
import { User } from 'src/resources/users/entities/user.entity';
import UserSeeder from 'src/resources/users/user.seeder';
import { Secret } from './resources/secrets/entities/secret.entity';
import { UserToGroup } from './resources/user-to-group/user-to-group.entity';
import { Group } from './resources/groups/entities/group.entity';

seeder({
  imports: [
    TypeOrmModule.forRoot(options),
    TypeOrmModule.forFeature([User, Secret, UserToGroup, Group]),
  ],
}).run([UserSeeder]);
