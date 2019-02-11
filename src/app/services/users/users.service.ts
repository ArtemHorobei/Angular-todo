import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../classes/user';
import { configAPI } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<User> {
    return this.http
      .get(`${configAPI.baseUrl}${configAPI.entities.users}`)
      .pipe(
        map(data =>
          data.map((user: any) =>
            ({
              id: user.id,
              name: user.name,
              nickname: user.username,
              email: user.email,
              phone: user.phone,
              website: user.website,
              companyName: user.company.name,
              companyPhrase: user.company.catchPhrase,
            })
          )
        )
      );
  }

  fetchUser(userId): Observable<User> {
    return this.http.get(`${configAPI.baseUrl}${configAPI.entities.users}${userId}`);
  }
}
