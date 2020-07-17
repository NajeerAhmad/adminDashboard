import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterGurdService } from '../services/router-gurd.service';

const routes: Routes = [
  { path: '', component: UsersListComponent, canActivate: [RouterGurdService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
