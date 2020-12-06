import { NgModule } from "@angular/core";
import { LoginContainer } from "src/containers/login/login.container";
import { ProtectedComponent } from "src/components/protected/protected.component";
import { RegisterContainer } from "src/containers/register/register.container";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/auth.guard";

const routes: Routes = [
  { path: "", component: RegisterContainer },
  { path: "login", component: LoginContainer },
  { path: "register", component: RegisterContainer },
  {
    path: "protected",
    component: ProtectedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin",
    loadChildren: () =>
      import("../modules/admin/admin.module").then((m) => m.AdminModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
