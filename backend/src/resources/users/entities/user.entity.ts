import { Base } from 'src/global/entities/base.entity';
import { Role } from 'src/guards/roles/role.enum';
import { Secret } from 'src/resources/secrets/entities/secret.entity';
import { UserToGroup } from 'src/resources/user-to-group/user-to-group.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class User extends Base {
  @Column()
  username: string;

  @Column()
  role: Role;

  @Column()
  email: string;

  @Column({ nullable: true })
  displayName: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => Secret, (secret) => secret.user, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  secrets?: Secret[];

  @OneToMany(() => UserToGroup, (userToGroup) => userToGroup.user, {
    nullable: true,
  })
  userToGroups: UserToGroup[];
}
