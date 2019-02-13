import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    this.usersService.fetchUsers()
      .subscribe(users => this.users = users);
  }
}
