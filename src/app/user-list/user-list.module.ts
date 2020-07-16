import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
