import { LoginContainer } from './containers/login/login.container';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterContainer } from './containers/register/register.container';

const routes: Routes = [
  { path: '', component: LoginContainer },
  { path: 'register', component: RegisterContainer }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
