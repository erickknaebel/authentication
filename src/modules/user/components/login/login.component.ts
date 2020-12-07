import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-login-component",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  @Output() login: EventEmitter<any> = new EventEmitter<any>();

  private loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _cs: CookieService) {
    this.loginForm = this._formBuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ]),
      password: new FormControl("", [Validators.required]),
    });
  }

  public submitLoginForm(): void {
    this.login.emit(this.loginForm.getRawValue());
  }

  public clearRegistrationForm(): void {
    this.loginForm.reset();
  }
}
