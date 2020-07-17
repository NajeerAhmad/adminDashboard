import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  arrayData: Array<any> = [{ "userid": 1, "username": "najeer", "password": "n123", "role": "ADMIN", "email": "najeerm@gmail.com", "mobile": "8990893893" },
  { "userid": 2, "username": "masali", "password": "m@123", "role": "ADMIN", "email": "najeekkrm@gmail.com", "mobile": "9890893893" }]
  redirectUrl: string = '/';
  loginUrl: string = '/login';
  isloggedIn: boolean = false;
  obData: Observable<any>;
  loggedInUser: any;
  isSignin = false;

  constructor() { }

  ngOnInit() {
  }

  getAllUsers() {
    return of(this.arrayData);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser() {
    return this.loggedInUser;
  }
  logoutUser(): void {
    this.isloggedIn = false;
  }
}
