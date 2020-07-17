import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  usersData: any
  isSignin = false;
  constructor() { }

  setData(data) {
    this.usersData = data;
    // this.isSignin = true;
  }

  getData() {

  }
}
