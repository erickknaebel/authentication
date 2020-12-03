import { AuthService } from "src/services/auth.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/interfaces/user";
import { saveUserInfo } from "../../helpers/user.info";

@Component({
  selector: "app-login-container",
  template:
    '<app-login-component (onLogin)="submitLoginForm($event)"></app-login-component>',
  styles: [],
})
export class LoginContainer {
  constructor(private _as: AuthService, private _router: Router) {}

  submitLoginForm(data: User) {
    this._as.loginUser(data).subscribe(
      (res) => {
        saveUserInfo({
          token: res.headers.get("Authorization"),
          user: res.body["data"],
        });
        this._router.navigate(["protected"]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
