import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/auth.guard';
import { LoginContainer } from 'src/containers/login/login.container';
import { ProtectedComponent } from 'src/components/protected/protected.component';
import { RegisterContainer } from 'src/containers/register/register.container';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RegisterContainer },
  { path: 'login', component: LoginContainer },
  { path: 'register', component: RegisterContainer },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
