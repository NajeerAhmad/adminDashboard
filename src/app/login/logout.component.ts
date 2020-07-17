import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'logout',
  template: `
      <div *ngIf="loggedInUser">
        Logged In: {{loggedInUser.username}} | {{loggedInUser.role}} |
        <button input='input' (click)="logout()">Logout</button>
      </div>
   `
})
export class LogoutComponent {
  loggedInUser: any;
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }
  logout() {
    this.authService.logoutUser();
    this.loggedInUser = null;
    this.router.navigate(["/welcome"]);
  }
}
