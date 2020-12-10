import { BehaviorSubject, Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ILogin } from "src/interfaces/ILogin";
import { Injectable } from "@angular/core";
import { IRegister } from "src/interfaces/IRegister";
import { map, mergeMap } from "rxjs/operators";
import { NgxPermissionsService } from "ngx-permissions";
import jwt_decode from "jwt-decode";

@Injectable()
export class AuthService {
  constructor(
    private _http: HttpClient,
    private _cs: CookieService,
    private _ps: NgxPermissionsService
  ) {}

  private _api: string = environment.databaseConfig.baseUrl;
  private _registerUrl: string = this._api + "account/register";
  private _loginUrl: string = this._api + "account/login";
  private _user = new BehaviorSubject<string>("");
  private _authenticated = new BehaviorSubject<boolean>(false);
  public user: Observable<string> = this._user.asObservable();
  public authenitcated: Observable<boolean> = this._authenticated.asObservable();

  /**
   * Register a new user
   * @description Store the user information the database
   * @param {Object} IUser
   * @return {Observable} Observable
   */
  register(credentials: IRegister): Observable<any> {
    delete credentials["confirmPassword"];
    delete credentials["displayName"];
    return this._http.post<IRegister>(this._registerUrl, credentials, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    });
  }

  /**
   * Login the user in
   * @description Store relevant data in session cookies
   * @param {Object} IUser
   * @return {Observable} Observable
   */
  login(credentials: ILogin): Observable<any> {
    return this._http
      .post<ILogin>(this._loginUrl, credentials, { observe: "response" })
      .pipe(
        map((r) => {
          this._cs.set("loginStatus", "1");
          this._cs.set("userId", r.body["data"]["_id"]);
          this._cs.set("email", r.body["data"]["email"]);
          this._cs.set("token", r.headers.get("Authorization"));
          this._user.next(r.body["data"]["email"]);
        }),
        mergeMap(() => {
          return this.getRoles(this._cs.get("userId")).pipe(
            map((u) => {
              this._cs.set("permissions", u["data"]["roles"]);
              this._ps.loadPermissions([this._cs.get("permissions")]);
              this.status();
            })
          );
        })
      );
  }

  /**
   * Log the user out
   * @desription Removes cookies and authentication data
   * @returns {Void} Void
   */
  logout(): void {
    this._user.next("");
    this._authenticated.next(false);
    this._ps.flushPermissions();
    this._cs.set("loginStatus", "0");
    this._cs.delete("userId", "/");
    this._cs.delete("email", "/");
    this._cs.delete("token", "/");
    this._cs.delete("permissions", "/");
    window.location.replace("/account");
  }

  /**
   * Checks the loggin status of a user.
   * @description Check to see if there is a valid session
   * for the user
   * @returns {Boolean} Boolean
   */
  status(): boolean {
    let loginStatus = this._cs.get("loginStatus");
    let token = this._cs.get("token");

    console.log(loginStatus);

    if (loginStatus === "1") {
      console.log("login status is set to: " + loginStatus);

      if (token == "" || token == null || token == undefined) {
        console.log("logged in is: " + false);
        this._user.next("");
        this._authenticated.next(false);
        return false;
      }
      // let decoded = jwt_decode(token);
      // console.log(decoded)
      // if (decoded["exp"] === undefined) {
      //   this._user.next('');
      //   this._authenticated.next(false);
      //   return false;
      // }
      // let date = new Date(0);
      // let tokenExpDate = date.setUTCSeconds(decoded["exp"]);
      // if (tokenExpDate.valueOf() > new Date().valueOf()) {
      //   this._user.next(this._cs.get("email"));
      //   this._authenticated.next(true);
      //   return true;
      // }
      this._user.next(this._cs.get("email"));
      this._authenticated.next(true);
      return true;
    }
    this._user.next("");
    this._authenticated.next(false);
    return false;
  }

  /**
   * Get the roles associated to the user
   * @param {String} id
   * @returns
   */
  getRoles(id: string): Observable<any> {
    return this._http.get(this._api + "account/" + id + "/roles", {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this._cs.get("token"),
      }),
    });
  }

  getUsers(): Observable<any> {
    console.log('calling get all users....')
    return this._http.get(this._api + "account/", {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this._cs.get("token"),
      }),
    });
  }
}
