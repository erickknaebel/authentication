import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MATERIAL } from 'src/material';
import { NgModule } from '@angular/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SERVICES } from 'src/services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MATERIAL,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
