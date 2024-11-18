import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}

export class UUID {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
