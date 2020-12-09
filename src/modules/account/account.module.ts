import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { MATERIAL } from 'src/material';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    COMPONENTS,
    CONTAINERS
  ],
  imports: [
    AccountRoutingModule,
    CommonModule,
    FormsModule,
    MATERIAL,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
