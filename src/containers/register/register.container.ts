import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscriber } from 'rxjs';
import { RegisterComponent } from 'src/components/register/register.component';
import { UserAccessService } from 'src/services/user-access.service';

@Component({
  selector: 'app-register-container',
  template: '<app-register-component (onRegister)="submitRegistrationForm($event)"></app-register-component>',
  styles: []
})
export class RegisterContainer {

  @ViewChild(RegisterComponent, null) registerForm:RegisterComponent;

  constructor(private userAccessService: UserAccessService) { }

  submitRegistrationForm(data: any) {
    this.userAccessService.register(data).subscribe(result => {
      this.registerForm.clearRegistrationForm();
      console.log(result)
    }, err => {
      console.log(JSON.parse(err.error).Error)
    });
  }

}
