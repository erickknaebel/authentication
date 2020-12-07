import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { MATERIAL } from 'src/material';
import { NgModule } from '@angular/core';
import { SERVICES } from 'src/services';

@NgModule({
  declarations: [
    COMPONENTS,
    CONTAINERS
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    MATERIAL,
    ReactiveFormsModule,
  ],
  providers: [SERVICES]
})
export class UserModule { }
