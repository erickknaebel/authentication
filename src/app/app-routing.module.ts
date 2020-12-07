import { NgModule } from "@angular/core";
import { NgxPermissionsGuard } from 'ngx-permissions';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: "user",
    loadChildren: () =>
      import("../modules/user/user.module").then((m) => m.UserModule),
  },
  {
    path: "admin",
    data: {
      permissions: {
        only: ['ADMIN'],
        redirectTo: '/login'
      }
    },
    loadChildren: () =>
      import("../modules/admin/admin.module").then((m) => m.AdminModule),
    canLoad: [NgxPermissionsGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
