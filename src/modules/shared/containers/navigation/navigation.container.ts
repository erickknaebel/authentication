import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/services/auth.service";

@Component({
  selector: "app-navigation-container",
  template: `<app-navigation-component
    [user$]="user$"
    [authenticated$]="authenticated$"
  ></app-navigation-component>`,
  styles: [],
})
export class NavigationContainer {

  private authenticated$: Observable<boolean>;
  private user$: Observable<string>;

  constructor(private _as: AuthService) {
    this.authenticated$ = this._as.authenitcated;
    this.user$ = this._as.user;
  }
}
