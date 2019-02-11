import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users/users.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    this.usersService.fetchUsers()
      .subscribe(users => this.users = users);
  };
}
