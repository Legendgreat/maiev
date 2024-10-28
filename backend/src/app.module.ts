import { Module } from '@nestjs/common';
import { UsersModule } from './resources/users/users.module';
import { SecretsModule } from './resources/secrets/secrets.module';
import { GroupsModule } from './resources/groups/groups.module';
import { DbModule } from './db/db.module';
import { AuthModule } from './guards/auth/auth.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [DbModule, AuthModule, UsersModule, SecretsModule, GroupsModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
