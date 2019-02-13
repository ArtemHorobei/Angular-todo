import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export const SELECT = '[USERS] Select';
export const ADD_ONE = '[USERS] Add One';

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) { }
}

export class AddOne implements Action {
  readonly type = ADD_ONE;

  constructor(public payload: User) { }
}

export type Action = AddOne | Select;
