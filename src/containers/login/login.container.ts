import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserAccessService } from 'src/services/user-access.service';

@Component({
  selector: 'app-login-container',
  template: '<app-login-component (onLogin)="submitLoginForm($event)"></app-login-component>',
  styles: []
})
export class LoginContainer {

  constructor(private userAccessService: UserAccessService) { }

  submitLoginForm(data: any) {
    this.userAccessService.login(data).subscribe(result => {
      console.log(result);
    }, err => {
      console.log(err)
    })
  }
}
