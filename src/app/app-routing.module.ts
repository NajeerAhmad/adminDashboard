import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterGurdService } from './services/router-gurd.service';
import { DashboardLayoutComponent } from './dash-board-component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
      path: '',
      component: DashboardLayoutComponent
    },
    {
      path: 'signup',
      loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
      // canLoad: [RouterGurdService]
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      // canActivate: [RouterGurdService]
    },
    {
      path: 'admin',
      loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule),
      // canActivate: [RouterGurdService]

    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
