import { AuthService } from 'src/services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { RegisterComponent } from 'src/components/register/register.component';
import { Register } from 'src/interfaces/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-container',
  template: '<app-register-component (register)="submitRegistrationForm($event)"></app-register-component>',
  styles: []
})
export class RegisterContainer {

  @ViewChild(RegisterComponent, null) registerForm: RegisterComponent;

  constructor(private _as: AuthService, private _router: Router) { }

  submitRegistrationForm(data: Register) {
    delete data.confirmPassword;
    delete data.displayName;
    this._as.registerUser(data).subscribe(() => {
      this.registerForm.clearRegistrationForm();
      this._router.navigate(['login'])
    }, err => {
      console.log(JSON.parse(err.error).Error);
    });
  }

}
