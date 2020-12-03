import { ADMIN_CONTAINERS } from './containers';
import { ADMIN_COMPONENTS } from './components';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ADMIN_COMPONENTS,
    ADMIN_CONTAINERS
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
