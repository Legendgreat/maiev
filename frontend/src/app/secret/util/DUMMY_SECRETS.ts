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
  {
    id: 1,
    label: 'Dummy Secret 2',
    login: 'username_2',
    secret: 'secret_2',
    type: Types.LOGIN,
  },
  {
    id: 2,
    label: 'Dummy Secret 3',
    login: 'username_3',
    secret: 'secret_3',
    type: Types.LOGIN,
  },
];

export default DUMMY_SECRETS;
