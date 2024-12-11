import { CreditcardType } from '../util/CreditcardTypes';
import SecretEnums from '../util/SecretEnums';

interface ISecretBase {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  updated?: Date;
}

export type CreditcardData = {
  cardholder?: string;
  type: CreditcardType;
  number: string;
  ccv: string;
  expiryDate: Date;
};

export type CredentialData = {
  website?: string;
  identifier: string;
  password: string;
};

interface ISecretCreditcard extends ISecretBase {
  type: SecretEnums.CREDITCARD;
  data: CreditcardData;
}

interface ISecretLogin extends ISecretBase {
  type: SecretEnums.LOGIN;
  data: CredentialData;
}

export type ISecret = ISecretCreditcard | ISecretLogin;
