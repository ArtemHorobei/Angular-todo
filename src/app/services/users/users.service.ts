import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../classes/user';
import { configAPI } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get(`${configAPI.baseUrl}${configAPI.entities.users}`);
  }
}
