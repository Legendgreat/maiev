import SecretEnums from '../util/SecretEnums';

export type Secret = {
  id: number;
  label?: string;
  login?: string;
  secret: string;
  type: SecretEnums;
};
