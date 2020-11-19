import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainer } from 'src/containers/login/login.container';
import { RegisterContainer } from 'src/containers/register/register.container';

const routes: Routes = [
  { path: '', component: RegisterContainer },
  { path: 'login', component: LoginContainer },
  { path: 'register', component: RegisterContainer }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
