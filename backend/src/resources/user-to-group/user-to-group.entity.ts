import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Group } from '../groups/entities/group.entity';
import { GroupRole } from './groupRole';

@Entity()
export class UserToGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  groupRole: GroupRole;

  @ManyToOne(() => User, (user) => user.userToGroups)
  user: User;

  @ManyToOne(() => Group, (group) => group.userToGroups)
  group: Group;
}
