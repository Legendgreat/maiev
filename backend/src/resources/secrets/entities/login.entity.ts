import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SecretData } from './secret-data.entity';

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => SecretData, (secret) => secret.login)
  secret: SecretData;

  @Column({ nullable: true })
  website?: string;

  @Column()
  identifier: string;

  @Column()
  password: string;
}
