import { Base } from 'src/global/entities/base.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { SecretData } from './secret-data.entity';
import { SecretOwner } from './secret-owner.entity';

export enum SecretType {
  Login = 'login',
  Creditcard = 'creditcard',
}

@Entity()
export class Secret extends Base {
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  icon?: string;

  @Column()
  type: SecretType;

  @OneToOne(() => SecretData, (data) => data.secret)
  @JoinColumn()
  data: SecretData;

  @OneToOne(() => SecretOwner, (owner) => owner.secret)
  owner: SecretOwner;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
