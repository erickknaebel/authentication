import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from 'src/components/register/register.component';
import { Register } from 'src/interfaces/register';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register-container',
  template: '<app-register-component (onRegister)="submitRegistrationForm($event)"></app-register-component>',
  styles: []
})
export class RegisterContainer {

  @ViewChild(RegisterComponent, null) registerForm:RegisterComponent;

  constructor(private _as: AuthService, private _router: Router) { }

  submitRegistrationForm(data: Register) {
    this._as.registerUser(data).subscribe(response => {
      this.registerForm.clearRegistrationForm();
      localStorage.setItem('token', response);
      this._router.navigate(['protected']);
    }, err => {
      console.log(JSON.parse(err.error).Error)
    });
  }

}
