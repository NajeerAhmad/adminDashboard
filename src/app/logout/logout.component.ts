import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
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




