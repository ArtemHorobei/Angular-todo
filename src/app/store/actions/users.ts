import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export const FETCH_SUCCESS = '[USERS] Fetch Success';

export class FetchSuccess implements Action {
  readonly type = FETCH_SUCCESS;

  constructor(public payload: User[]) { }
}

export type Action = FetchSuccess;
