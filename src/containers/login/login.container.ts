import { AuthService } from "src/services/auth.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/interfaces/user";
import { saveUserInfo } from "../../helpers/user.info";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-login-container",
  template:
    '<app-login-component (onLogin)="submitLoginForm($event)"></app-login-component>',
  styles: [],
})
export class LoginContainer {
  constructor(
    private _as: AuthService,
    private _router: Router,
    private _cs: CookieService
  ) {}

  submitLoginForm(data: User) {
    this._as.loginUser(data).subscribe(
      (res) => {
        this._cs.set('userId', res.body['data']['_id'], {expires: 2});
        this._cs.set('email', res.body['data']['email'], {expires: 2})
        this._cs.set('token', res.headers.get('Authorization'))
        // saveUserInfo({
        //   token: res.headers.get("Authorization"),
        //   user: res.body["data"],
        // });
        this._as.getRoles(this._cs.get('userId')).subscribe((r) => {
          console.log(r);
          this._cs.set('permissions', r.data.roles);
        });
        this._router.navigate(["protected"]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
