import { AuthService } from "./services/auth.service";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Injectable } from "@angular/core";
import { NgxPermissionsService } from 'ngx-permissions';
import { Route } from "@angular/compiler/src/core";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private _as: AuthService,
    private _router: Router,
    private _cs: CookieService,
    private _ps: NgxPermissionsService
  ) {}

  canActivate(): boolean {
    if (this._as.loggedIn()) {
      return true;
    } else {
      this._router.navigate(["/login"]);
      return false;
    }
  }

  canLoad(): any {
    if(this._ps.getPermissions()[this._cs.get('permissions')] != null) {
      return true;
    }
    return false;
  }
}
