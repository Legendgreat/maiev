import { ISecret } from '../secrets/interfaces/secret.interface';

export enum UserRole {
  User = 'user',
  Admin = 'admin',
}

export interface User {
  id: string;
  username: string;
  role: UserRole;
  email: string;

  displayName: string;
  firstName?: string;
  lastName?: string;

  password: string;

  secrets?: ISecret[];

  // userToGroups: UserToGroup[];

  created: Date;
  updated: Date;
  deletedAt?: Date;
}
