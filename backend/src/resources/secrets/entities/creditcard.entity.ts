import { Column } from 'typeorm';
import { SecretData } from './secret.entity';

export enum CreditcardType {
  Visa = 'visa',
  Mastercard = 'mastercard',
}

export class Creditcard extends SecretData {
  @Column({ nullable: true })
  cardholder: string;

  @Column()
  type: CreditcardType;

  @Column()
  number: number;

  @Column()
  cvv: number;

  @Column()
  expiryDate: Date;
}
