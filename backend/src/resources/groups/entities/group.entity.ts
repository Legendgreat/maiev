import { Base } from 'src/global/entities/base.entity';
import { Secret } from 'src/resources/secrets/entities/secret.entity';
import { UserToGroup } from 'src/resources/user-to-group/user-to-group.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity()
export class Group extends Base {
  @OneToMany(() => Secret, (secret) => secret.group, { nullable: true })
  secrets: Secret[];

  @OneToMany(() => UserToGroup, (userToGroup) => userToGroup.group, {
    nullable: true,
  })
  userToGroups: UserToGroup[];
}
