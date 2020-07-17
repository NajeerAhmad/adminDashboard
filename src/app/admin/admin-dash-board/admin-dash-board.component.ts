import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  template: `
	  <h2>Welcome to Admin Home</h2>
    <a [routerLink]="['./users']" routerLinkActive="active">UsersList</a>
    <!-- <div *ngIf="!loggedIn">
       <app-logout></app-logout>
    </div> -->
    <div *ngIf="loggedInUser">
        Logged In: {{loggedInUser}}
        <button type="button" class="btn btn-primary" (click)="logout()">Logout</button>
      </div>
	  <router-outlet></router-outlet>
  `
})
export class AdminDashBoardComponent implements OnInit {
  loggedInUser: any;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    console.log('this.loggedInUser', this.loggedInUser)
  }

  logout() {
    this.authService.logoutUser();
    this.loggedInUser = null;
    this.router.navigate(["/landingPage"]);
  }

}
