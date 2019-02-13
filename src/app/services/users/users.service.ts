import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { configAPI } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${configAPI.baseUrl}${configAPI.entities.users}`);
  }

  fetchUser(userId): Observable<User> {
    return this.http.get<User>(`${configAPI.baseUrl}${configAPI.entities.users}${userId}`);
  }

}
