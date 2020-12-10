import { NgModule } from "@angular/core";
import { NgxPermissionsGuard } from "ngx-permissions";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeContainer } from "../modules/shared/containers/welcome/welcome.container";

const routes: Routes = [
  { path: "*", redirectTo: "account", pathMatch: "full" },
  {
    path: "welcome",
    data: {
      permissions: { 
        only: ["ADMIN", "USER"], 
        redirectTo: "/account" 
      } 
    },
    component: WelcomeContainer,
    canActivate: [NgxPermissionsGuard],
  },
  {
    path: "account",
    loadChildren: () =>
      import("../modules/account/account.module").then((m) => m.AccountModule),
  },
  {
    path: "admin",
    data: {
      permissions: {
        only: ["ADMIN"],
        redirectTo: "/account",
      }
    },
    loadChildren: () =>
      import("../modules/admin/admin.module").then((m) => m.AdminModule),
    canLoad: [NgxPermissionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
