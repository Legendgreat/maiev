import SecretEnums from '../util/SecretEnums';

export interface Secret {
  id: number;
  label?: string;
  login?: string;
  secret: string;
  type: SecretEnums;
}
