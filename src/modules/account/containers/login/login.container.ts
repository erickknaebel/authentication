import { AuthService } from "src/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { ILogin } from "src/interfaces/ILogin";
import { Router } from "@angular/router";


@Component({
  selector: "app-login-container",
  template:
    '<app-login-component (login)="submitLoginForm($event)"></app-login-component>',
  styles: [],
})
export class LoginContainer implements OnInit {

  constructor(
    private _as: AuthService,
    private _router: Router,
  ) {}

  ngOnInit() {
   
  }

  submitLoginForm(data: ILogin) {
    this._as.login(data).subscribe(response => {
        console.log(response)
        //this._router.navigate(['/admin']);
    });
  }
}
