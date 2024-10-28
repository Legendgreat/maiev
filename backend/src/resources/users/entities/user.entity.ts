import { Base } from 'src/global/entities/base.entity';
import { Role } from 'src/guards/roles/role.enum';
import { Group } from 'src/resources/groups/entities/group.entity';
import { Secret } from 'src/resources/secrets/entities/secret.entity';
import { Column, JoinColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm';

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

  @ManyToMany(() => Group, (group) => group.members, { nullable: true })
  @JoinTable()
  groups: Group[];
}
