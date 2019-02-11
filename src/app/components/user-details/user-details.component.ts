import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../../services/users/users.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser = () => {
    const userId = +this.route.snapshot.paramMap.get('id');

    this.usersService.fetchUser(userId)
      .subscribe(user => this.user = user);
  }

  goBack = () => {
    this.location.back();
  }

}
