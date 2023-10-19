export type IRole = 'ADMIN' | 'STUDENT' | 'LECTURER';

export interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  role: IRole;
  isInviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Token {
  token: string;
  expires: string;
}

export interface Tokens {
  access: Token;
  refresh: Token;
  activate: Token;
}
