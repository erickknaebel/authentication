import { AuthService } from "./services/auth.service";
import { CanActivate, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Injectable } from "@angular/core";
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {

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

  // canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   console.log(route.data)
  //   if (route.data.permissions) {
  //     console.log('only.....')
  //     if (this._cs.get('permissionsss') == route.data.permissions.only) {
  //       return true
  //     }
  //     return false;
  //   }
  // }
}
