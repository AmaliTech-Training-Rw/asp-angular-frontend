import { Tokens, User } from './user.interface';

export interface ILogin {
  username: string;
  password: string;
}

export interface IAuthData {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: string;
  refreshTokenExpires: string;
}

export interface AuthLoginResponseData {
  user: User;
  tokens: Tokens;
}
