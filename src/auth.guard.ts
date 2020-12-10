import { AuthService } from "./services/auth.service";
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {

  constructor(
    private _as: AuthService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (this._as.status()) {
      return true;
    } else {
      this._router.navigate(['/account']);
      return false;
    }
  }
}
