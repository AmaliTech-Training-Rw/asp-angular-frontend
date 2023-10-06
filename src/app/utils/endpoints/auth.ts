export class Endpoints {
  static AUTH_LOGIN: string = '/api/auth/login';
  static AUTH_LOGOUT: string = '/api/auth/logout';
  static AUTH_REFRESH_TOKENS: string = '/api/auth/refresh-tokens';
  static AUTH_RESET_PASSWORD: string = '/api/auth/reset-password';

  static authActivateAccount(token: string): string {
    return `/api/auth/activate/${token}`;
  }
}
