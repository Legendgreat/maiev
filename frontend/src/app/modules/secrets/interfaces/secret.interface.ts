import { CreditcardType } from '../util/CreditcardTypes';
import SecretEnums from '../util/SecretEnums';

interface ISecretBase {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  updated?: Date;
}

interface ISecretCreditcard extends ISecretBase {
  type: SecretEnums.CREDITCARD;
  data: {
    cardholder?: string;
    type: CreditcardType;
    number: string;
    ccv: string;
    expiryDate: Date;
  };
}

interface ISecretLogin extends ISecretBase {
  type: SecretEnums.LOGIN;
  data: {
    website?: string;
    identifier: string;
    password: string;
  };
}

export type ISecret = ISecretCreditcard | ISecretLogin;
