import {
  CredentialData,
  CreditcardData,
} from '../../interfaces/secret.interface';

export default interface ISecretInputData {
  credentials: Partial<CredentialData>;
  creditcard: Partial<CreditcardData>;
}
