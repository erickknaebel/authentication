import { AuthService } from 'src/services/auth.service'
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/user';

@Component({
  selector: 'app-login-container',
  template: '<app-login-component (onLogin)="submitLoginForm($event)"></app-login-component>',
  styles: []
})
export class LoginContainer {

  constructor(private _as: AuthService, private _router: Router) { }

  submitLoginForm(data: User) {
    this._as.loginUser(data).subscribe(response => {
      localStorage.setItem('token', response);
      this._router.navigate(['protected']);
    }, err => {
      console.log(err)
    })
  }
}
