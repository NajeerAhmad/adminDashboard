import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterGurdService } from './services/router-gurd.service';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
      path: 'ssc',
      loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
      data: {
        allowedActors: ['SSC']
      },
      canLoad: [RouterGurdService]
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      canActivate: [RouterGurdService]
    },
    {
      path: 'users',
      loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
