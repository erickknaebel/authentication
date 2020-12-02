import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment } from "../environments/environment";
import { User } from "src/interfaces/user";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable()
export class AuthService {
  private _api: string = environment.databaseConfig.baseUrl;
  private _registerUrl: string = this._api + "users/create";
  private _loginUrl: string = this._api + "users/login";

  constructor(private _http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this._http.post(this._registerUrl, JSON.stringify(user), {
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
    return localStorage.getItem("token");
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }
}
