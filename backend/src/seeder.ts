import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { options } from './db/data-source';
import { User } from './resources/users/entities/user.entity';
import UserSeeder from './resources/users/user.seeder';

seeder({
  imports: [TypeOrmModule.forRoot(options), TypeOrmModule.forFeature([User])],
}).run([UserSeeder]);
