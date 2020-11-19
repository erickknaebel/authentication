import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() onRegister: EventEmitter<any> = new EventEmitter<any>();
  
  registrationForm: FormGroup;

  constructor() { 
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', [
        Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      password: new FormControl('', Validators.required),
      displayName: new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
  }

  public submitRegistration(): void {
    console.log('submitting registration....')
    console.log(this.registrationForm.getRawValue())
    this.onRegister.emit(this.registrationForm.getRawValue());
  }

}
