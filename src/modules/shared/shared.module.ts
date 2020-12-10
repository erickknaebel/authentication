import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MATERIAL } from "src/material";
import { NgModule } from "@angular/core";
import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterModule } from '@angular/router';
import { SERVICES } from "src/services";
import { SHARED_COMPONENTS } from "./components";
import { SHARED_CONTAINERS } from "./containers";

@NgModule({
  declarations: [SHARED_COMPONENTS, SHARED_CONTAINERS],
  imports: [CommonModule, FormsModule, MATERIAL, NgxPermissionsModule, ReactiveFormsModule, RouterModule],
  exports: [SHARED_CONTAINERS],
  providers: [SERVICES],
  entryComponents: [SHARED_CONTAINERS, SHARED_COMPONENTS]
})
export class SharedModule {}
