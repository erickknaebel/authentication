import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../environments/environment';
import { User } from 'src/interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  private _api: string = environment.databaseConfig.baseUrl;
  private _registerUrl: string = this._api + 'users/create';
  private _loginUrl: string = this._api + 'users/login';

  constructor(private _http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this._http.post(
      this._registerUrl,
      JSON.stringify(user),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }

  loginUser(user: User): Observable<any> {
    return this._http.post(
      this._loginUrl,
      JSON.stringify(user),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }

  logoutUser(): void {
    localStorage.removeItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}