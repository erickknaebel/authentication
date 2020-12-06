import { AuthService } from "./services/auth.service";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Route } from "@angular/compiler/src/core";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private _as: AuthService,
    private _router: Router,
    private _cs: CookieService
  ) {}

  canActivate(): boolean {
    if (this._as.loggedIn()) {
      return true;
    } else {
      this._router.navigate(["/login"]);
      return false;
    }
  }

  public canLoad(route: Route): any {
    //let url = route
    console.log(route.loadChildren.url);

    if (this._cs.get("permissions") === "admin") {
      return true;
    }
    this._router.navigate(['/protected']);
    return false;
  }
}
