import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from '../../models/user';
import { configAPI } from '../../constants/config';
import * as fromUserActions from '../../store/actions/users';
import * as fromUserReducer from '../../store/reducers/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private store: Store<fromUserReducer.State>
  ) { }

  fetchUsers() {
    this.http.get<User[]>(`${configAPI.baseUrl}${configAPI.entities.users}`)
      .subscribe(users => this.store.dispatch(new fromUserActions.FetchSuccess(users)));
  }

  fetchUser(userId): Observable<User> {
    return this.http.get<User>(`${configAPI.baseUrl}${configAPI.entities.users}${userId}`);
  }

}
