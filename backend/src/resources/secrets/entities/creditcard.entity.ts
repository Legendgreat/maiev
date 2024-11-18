import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SecretData } from './secret-data.entity';

export enum CreditcardBrand {
  Visa = 'visa',
  Mastercard = 'mastercard',
}

@Entity()
export class Creditcard {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => SecretData, (secret) => secret.creditcard)
  secret: SecretData;

  @Column({ nullable: true })
  cardholder: string;

  @Column()
  brand: CreditcardBrand;

  @Column()
  number: string;

  @Column()
  cvv: string;

  @Column()
  expiryDate: Date;
}
