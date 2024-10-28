import { Module } from '@nestjs/common';
import { UserModule } from './resources/users/user.module';
import { SecretsModule } from './resources/secrets/secrets.module';
import { GroupsModule } from './groups/groups.module';
import { GroupRolesModule } from './resources/group-roles/group-roles.module';

@Module({
  imports: [UserModule, SecretsModule, GroupsModule, GroupRolesModule],
})
export class AppModule {}
