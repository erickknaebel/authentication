import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
  private _api: string = environment.databaseConfig.baseUrl;
  private _registerUrl: string = this._api + "users/register";
  private _loginUrl: string = this._api + "users/login";

  constructor(private _http: HttpClient, private _cs: CookieService) {}

  registerUser(user: any): Observable<any> {
    return this._http.post(this._registerUrl, user, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      responseType: "text",
    });
  }

  loginUser(user: any): Observable<HttpResponse<Object>> {
    return this._http.post(this._loginUrl, user, { observe: "response" }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  logoutUser(): void {
    localStorage.removeItem("token");
  }

  getToken() {
    return this._cs.get('token');
  }

  loggedIn() {
    return !!this._cs.get('token')
  }

  getRoles(id: string): any {
    return this._http.get(this._api + 'users/' + id + '/roles', {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this._cs.get('token')})
    })
  }
}
