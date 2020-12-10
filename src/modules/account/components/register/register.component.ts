import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../../../helpers/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Output() register: EventEmitter<any> = new EventEmitter<any>();

  private registrationForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) {
    this.registrationForm = this._formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{5,}')
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{5,}')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ])
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  public submitRegistrationForm(): void {
    this.register.emit(this.registrationForm.getRawValue());
  }

  public clearRegistrationForm(): void {
    this.registrationForm.reset();
  }

  public routeToLogin() {
    this._router.navigate(['/account']);
  }

}
