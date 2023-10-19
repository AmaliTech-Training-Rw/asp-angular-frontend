import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/app/utils/endpoints/auth';
import {
  AuthLoginResponseData,
  ILogin,
} from 'src/app/utils/interfaces/auth.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = environment.API_URL;

  constructor(private client: HttpClient) {}

  login(credentials: ILogin): Observable<AuthLoginResponseData> {
    return this.client.post<AuthLoginResponseData>(
      `${this.url}${Endpoints.AUTH_LOGIN}`,
      credentials,
      httpOptions
    );
  }
}
