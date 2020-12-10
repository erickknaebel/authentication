import { AuthService } from 'src/services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { IRegister } from 'src/interfaces/IRegister';
import { RegisterComponent } from '../../components/register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-container',
  template: '<app-register-component (register)="submitRegistrationForm($event)"></app-register-component>',
  styles: []
})
export class RegisterContainer {

  @ViewChild(RegisterComponent, null) registerForm: RegisterComponent;

  constructor(private _as: AuthService, private _router: Router) { }

  submitRegistrationForm(data: IRegister) {
    this._as.register(data).subscribe(() => {
      this.registerForm.clearRegistrationForm();
      this._router.navigate(['account'])
    }, err => {
      console.log(JSON.parse(err.error).Error);
    });
  }

}
