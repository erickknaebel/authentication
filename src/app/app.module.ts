import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { COMPONENTS } from '../components';
import { CONTAINERS } from '../containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MATERIAL } from 'src/material';
import { NgModule } from '@angular/core';
import { SERVICES } from 'src/services';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    CONTAINERS
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MATERIAL,
    ReactiveFormsModule,
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
