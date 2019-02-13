import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user';
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;

  constructor(
    private usersService: UsersService,
    private store: Store<fromRoot.State>
  ) {
    this.users = this.store.select(fromRoot.getAllUsers);
  }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    this.usersService.fetchUsers();
  }
}
