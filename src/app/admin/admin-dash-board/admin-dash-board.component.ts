import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-board',
  template: `
	  <h2>Welcome to Admin Home</h2>
	  <a [routerLink]="['./users']" routerLinkActive="active">UsersList</a>
	  <router-outlet></router-outlet>
  `
})
export class AdminDashBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
