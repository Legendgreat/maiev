import { Column } from 'typeorm';

export enum CreditcardType {
  Visa = 'visa',
  Mastercard = 'mastercard',
}

export class Creditcard {
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
