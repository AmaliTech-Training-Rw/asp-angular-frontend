import { environment } from 'src/environments/environment';
import { AuthLoginResponseData } from '../interfaces/auth.interface';

export class LocalStorage {
  static setUserAuthData(authData: AuthLoginResponseData) {
    localStorage.setItem(
      environment.LOCAL_STORAGE_AUTH_DATA_KEY,
      JSON.stringify(authData)
    );
  }

  static getUserAuthData(): AuthLoginResponseData | null {
    const authData = localStorage.getItem(
      environment.LOCAL_STORAGE_AUTH_DATA_KEY
    );
    if (authData) {
      return JSON.parse(authData);
    }
    return null;
  }

  static removeUserAuthData() {
    localStorage.removeItem(environment.LOCAL_STORAGE_AUTH_DATA_KEY);
  }
}
