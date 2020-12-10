import { AuthService } from "src/services/auth.service";
import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { NavigationContainer } from 
  "src/modules/shared/containers/navigation/navigation.container";
import { NgxPermissionsService } from "ngx-permissions";
import { Observable } from "rxjs";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private _cs: CookieService,
    private _ps: NgxPermissionsService,
    private _as: AuthService,
    private _cf: ComponentFactoryResolver
  ) {}

  @ViewChild("navigation", { read: ViewContainerRef, static: true })
  navigation: ViewContainerRef;

  private authenticated$: Observable<boolean>;
  private user$: Observable<string>;

  ngOnInit(): void {
    /**
     * Get any permission that may be stored in cookies
     * and load them at app startup to prevent user from
     * having to login on page refresh
     */
    this._as.status();
    this._ps.loadPermissions([this._cs.get("permissions")]);
    this.user$ = this._as.user;
    this._as.authenitcated.subscribe((res) => {
      if (res) {
        const factory = this._cf.resolveComponentFactory(NavigationContainer);
        this.navigation.createComponent(factory);
      }
    });
  }
}
