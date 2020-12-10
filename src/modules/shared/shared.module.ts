import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MATERIAL } from "src/material";
import { NgModule } from "@angular/core";
import { SERVICES } from "src/services";
import { SHARED_COMPONENTS } from "./components";
import { SHARED_CONTAINERS } from "./containers";

@NgModule({
  declarations: [SHARED_COMPONENTS, SHARED_CONTAINERS],
  imports: [CommonModule, FormsModule, MATERIAL, ReactiveFormsModule],
  providers: [SERVICES],
})
export class SharedModule {}
