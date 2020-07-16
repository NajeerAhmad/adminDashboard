import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: any;
  // usersArray = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.usersList = this.sharedService.usersData;
    console.log('users', this.usersList);
  }

}
