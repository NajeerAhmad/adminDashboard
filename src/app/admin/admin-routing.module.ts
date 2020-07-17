import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../dash-board-component';
import { RouterGurdService } from '../services/router-gurd.service';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: AdminDashBoardComponent,
      children: [
        {
          path: 'users',
          loadChildren: () => import('../user-list/user-list.module').then(m => m.UserListModule),
          // canActivate: [RouterGurdService]

        },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
