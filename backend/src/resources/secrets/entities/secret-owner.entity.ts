import { Group } from 'src/resources/groups/entities/group.entity';
import { User } from 'src/resources/users/entities/user.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Secret } from './secret.entity';

@Entity()
export class SecretOwner {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Secret, (secret) => secret.owner)
  @JoinColumn()
  secret: Secret;

  @ManyToOne(() => User, (user) => user.secrets, { nullable: true })
  user?: User;

  @ManyToOne(() => Group, (group) => group.secrets, { nullable: true })
  group?: Group;
}
