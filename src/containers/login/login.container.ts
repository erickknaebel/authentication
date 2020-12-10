import { AuthService } from "src/services/auth.service";
import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from "@angular/router";
import { ILogin } from "src/interfaces/ILogin";


@Component({
  selector: "app-login-container",
  template:
    '<app-login-component (login)="submitLoginForm($event)"></app-login-component>',
  styles: [],
})
export class LoginContainer {
  constructor(
    private _as: AuthService,
    private _router: Router,
    private _cs: CookieService,
    private _ps: NgxPermissionsService,
  ) {}

  submitLoginForm(data: ILogin) {
    this._as.login(data).subscribe(
      (res) => {
        this._cs.set('userId', res.body['data']['_id'], {expires: 2});
        this._cs.set('email', res.body['data']['email'], {expires: 2})
        this._cs.set('token', res.headers.get('Authorization'))
        this._as.getRoles(this._cs.get('userId')).subscribe((r) => {
          this._cs.set('permissions', r.data.roles);
            this._ps.loadPermissions([r.data.roles]);
        });
        this._router.navigate(["protected"]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
