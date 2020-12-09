import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MATERIAL } from 'src/material';
import { NgModule } from '@angular/core';
import { SERVICES } from 'src/services';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MATERIAL,
      ReactiveFormsModule,
    ],
    providers: [SERVICES]
})
export class SharedModule {}
