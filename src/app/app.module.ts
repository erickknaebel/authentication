import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Components } from '../components';
import { Containers } from '../containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Material } from 'src/material';
import { NgModule } from '@angular/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { Services } from 'src/services';

@NgModule({
  declarations: [
    AppComponent,
    Components,
    Containers
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Material,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
