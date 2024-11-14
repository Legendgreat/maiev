import { ISecret } from '../interfaces/secret.interface';
import Types from './SecretEnums';

const DUMMY_SECRETS: ISecret[] = [
  {
    id: 0,
    name: 'Dummy Secret 1',
    data: {
      identifier: 'User 1',
      password: 'secret_1',
    },
    type: Types.LOGIN,
  },
  {
    id: 1,
    name: 'Dummy Secret 2',
    data: {
      identifier: 'User 1',
      password: 'secret_2',
    },
    type: Types.LOGIN,
  },
  {
    id: 2,
    name: 'Dummy Secret 3',
    data: {
      identifier: 'User 1',
      password: 'secret_3',
    },
    type: Types.LOGIN,
  },
];

export default DUMMY_SECRETS;
