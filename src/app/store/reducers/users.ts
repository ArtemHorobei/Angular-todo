import * as userAction from '../actions/users';

import { User } from '../../models/user';

export interface State {
  ids: number[];
  users: { [id: number]: User };
  selected: number;
}

export const initialState: State = {
  ids: [1],
  users: {},
  selected: null,
};

export function reducer(state = initialState, action: userAction.Action) {
  switch (action.type) {
    case userAction.FETCH_SUCCESS: {
      return {
        ...state,
        ids: action.payload.map(item => item.id),
        users: action.payload.reduce((resObj, item) => {
          resObj[item.id] = item;
          return resObj;
        }, {})
      };
    }

    default:
      return state;
  }
}

export const getIds = (state: State) => state.ids;
export const getUsers = (state: State) => state.users;
export const getSelected = (state: State) => state.selected;
