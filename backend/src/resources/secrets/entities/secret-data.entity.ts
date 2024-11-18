import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Secret } from './secret.entity';
import { Login } from './login.entity';
import { Creditcard } from './creditcard.entity';

@Entity()
export class SecretData {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Secret, (secret) => secret.data)
  secret: Secret;

  @OneToOne(() => Login, (login) => login.secret, { nullable: true })
  @JoinColumn()
  login?: Login;

  @OneToOne(() => Creditcard, (creditcard) => creditcard.secret, {
    nullable: true,
  })
  @JoinColumn()
  creditcard?: Creditcard;
}
