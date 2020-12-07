import { ADMIN_CONTAINERS } from './containers';
import { ADMIN_COMPONENTS } from './components';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SERVICES } from 'src/services';

@NgModule({
  declarations: [
    ADMIN_COMPONENTS,
    ADMIN_CONTAINERS
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true,
      rolesIsolate: true
    })
  ],
  providers: [SERVICES],
})
export class AdminModule { }
