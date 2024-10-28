import { Column } from 'typeorm';
import { SecretData } from './secret.entity';

export class Login extends SecretData {
  @Column({ nullable: true })
  website: string;

  @Column()
  identifier: string;

  @Column()
  password: string;
}
