import { Base } from 'src/global/entities/base.entity';
import { Group } from 'src/resources/groups/entities/group.entity';
import { User } from 'src/resources/users/entities/user.entity';
import { Column, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Creditcard } from './creditcard.entity';
import { Login } from './login.entity';

export enum SecretType {
  Login = 'login',
  Creditcard = 'creditcard',
}

export class Secret extends Base {
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  icon?: string;

  @Column()
  type: SecretType;

  @Column()
  data: Login | Creditcard;

  @ManyToOne(() => User, (user) => user.secrets, { nullable: true })
  user?: User;

  @ManyToOne(() => Group, (group) => group.secrets, { nullable: true })
  group?: Group;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
