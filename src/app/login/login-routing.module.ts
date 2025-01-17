import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RouterGurdService } from '../services/router-gurd.service';
// canActivate: [RouterGurdService]
const routes: Routes = [
  { path: '', component: LoginComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
