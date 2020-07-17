import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad, CanActivate } from '@angular/router';
import { SharedService } from './shared.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGurdService implements CanLoad, CanActivate {

  constructor(private router: Router,
    private sharedService: SharedService,
    private authService: AuthService) { }

  canActivate() {
    console.log('i am checking to see if you are logged in');
    if (this.authService.isSignin === true) {
      return true;
    } else if (this.authService.loggedInUser === 'ADMIN') {
      return true;
    } else {
      return false;

    }
    // if (this.authService.isloggedIn === true) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  canLoad(route: Route): boolean {
    if (route && route.data && route.data.allowedRole) {
      let allowedRole = route.data.allowedRole;
      console.log('allowedRole:', allowedRole);
      let url: string = route.path;
      console.log('Url:' + url);
      this.router.navigate(['/signup']);
      return true;
    } else {
      console.log('canload');
      return false;
    }
  }
}
