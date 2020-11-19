import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helpers/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Output() onRegister: EventEmitter<any> = new EventEmitter<any>();

  registrationForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required, 
        Validators.pattern("[a-zA-Z]{5,}")
      ]),
      lastName: new FormControl('', [
        Validators.required, 
        Validators.pattern("[a-zA-Z]{5,}")
      ]),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ]),
      displayName: new FormControl('', {}),
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  public submitRegistrationForm(): void {
    this.submitted = true;
    this.onRegister.emit(this.registrationForm.getRawValue());
  }

  public clearRegistrationForm(): void {
    this.registrationForm.reset();
  }

  public routeToLogin() {
    this.router.navigate(['/login']);
  }

}
