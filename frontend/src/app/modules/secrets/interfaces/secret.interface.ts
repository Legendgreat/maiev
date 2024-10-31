import SecretEnums from '../util/SecretEnums';

export interface ISecret {
  id: number;
  label?: string;
  login?: string;
  secret: string;
  type: SecretEnums;
}
