import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RouterGurdService } from '../services/router-gurd.service';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [RouterGurdService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
