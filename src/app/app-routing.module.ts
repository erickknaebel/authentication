import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterContainer } from 'src/containers/register/register.container';

const routes: Routes = [
  { path: '', component: RegisterContainer }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
