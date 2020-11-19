import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccessService } from 'src/services/user-access.service';

@Component({
  selector: 'app-login-container',
  template: '<app-login-component (onLogin)="submitLoginForm($event)"></app-login-component>',
  styles: []
})
export class LoginContainer {

  constructor(private userAccessService: UserAccessService, private router: Router) { }

  submitLoginForm(data: any) {
    this.userAccessService.login(data).subscribe(response => {
      console.log(response);
      localStorage.setItem('token', response);
      this.router.navigate(['protected'])
    }, err => {
      console.log(err)
    })
  }
}
