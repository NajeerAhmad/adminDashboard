import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { LogoutComponent } from '../logout/logout.component';

@NgModule({
  declarations: [AdminDashBoardComponent, LogoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
