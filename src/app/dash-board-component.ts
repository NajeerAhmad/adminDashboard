import { Component } from '@angular/core';
@Component({
  template: `
	  <nav [ngClass] = "'parent-menu'">
	    <ul>
        <li><a routerLink="/signup" routerLinkActive="active">Signup</a></li>
        <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
	    </ul>
    </nav>
    <!-- <app-logout></app-logout> -->
	  <div [ngClass] = "'parent-container'">
	     <router-outlet></router-outlet>
	  </div>
  `
})
export class DashboardLayoutComponent {
}
