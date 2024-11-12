import SecretEnums from '../util/SecretEnums';

export interface ISecret {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  type: SecretEnums;
  data: string;
  updated: Date;
}
