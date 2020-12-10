import { AuthService } from 'src/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-container',
  template: `<app-admin-component [users]='users$ | async'></app-admin-component>`,
  styles: []
})
export class AdminContainer implements OnInit {

  private users$: Observable<any>

  constructor(private _as: AuthService) { }

  ngOnInit() {
    this.users$ = this._as.getUsers();
  }

}
