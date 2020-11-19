import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Components } from '../components';
import { Containers } from '../containers';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    Components,
    Containers
  ],
  imports: [
    AppRoutingModule,
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
