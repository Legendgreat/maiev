import { Secret } from '../types/SecretType';
import Types from './SecretEnums';

const DUMMY_SECRETS: Secret[] = [
  {
    id: 0,
    label: 'Dummy Secret 1',
    login: 'username_1',
    secret: 'secret_1',
    type: Types.LOGIN,
  },
];

export default DUMMY_SECRETS;
