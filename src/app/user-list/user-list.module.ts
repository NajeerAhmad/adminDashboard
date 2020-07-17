import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { FormErrorConotrolModule } from '../form-error-conotrol/form-error-conotrol.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    FormErrorConotrolModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserListModule { }
