import { Column } from 'typeorm';

export class Login {
  @Column({ nullable: true })
  website: string;

  @Column()
  identifier: string;

  @Column()
  password: string;
}
