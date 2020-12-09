import { AuthService } from "src/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { NgxPermissionsService } from "ngx-permissions";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {

  constructor(
    private _cs: CookieService,
    private _ps: NgxPermissionsService,
    private _as: AuthService,
    private _router: Router
  ) {}

  private authenticated$: Observable<boolean>;
  private user$: Observable<string>;

  ngOnInit(): void {
    /**
     * Get any permission that may be stored in cookies
     * and load them at app startup to prevent user from
     * having to login on page refresh
     */
    
    this.intialize();
  }

  intialize() {
    if(this._as.status()) {
      this._ps.loadPermissions([this._cs.get("permissions")]);
      this.user$ = this._as.user;
      this.authenticated$ = this._as.authenitcated;
    } else {
      this._router.navigate(['/account'])
    }
  }

  logout() {
    this._as.logout();
  }
}
