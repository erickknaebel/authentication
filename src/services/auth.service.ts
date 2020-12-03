import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private _api: string = environment.databaseConfig.baseUrl;
  private _registerUrl: string = this._api + 'users/register';
  private _loginUrl: string = this._api + 'users/login';

  constructor(private _http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this._http.post(this._registerUrl, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text',
    });
  }

  loginUser(user: any): Observable<HttpResponse<object>> {
    return this._http.post(this._loginUrl, user, { observe: 'response' }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  logoutUser(): void {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
