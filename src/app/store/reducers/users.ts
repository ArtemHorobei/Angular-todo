import * as userAction from '../actions/users';

import { User } from '../../models/user';

export interface State {
  ids: number[];
  users: { [id: number]: User };
  selected: number;
}

export const initialState: State = {
  ids: [1],
  users: {
    1: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    },
  },
  selected: null,
};

export function reducer(state = initialState, action: userAction.Action) {
  switch (action.type) {
    case userAction.ADD_ONE: {
      const newUser: User = action.payload;

      return {
        ...state,
        ids: [...state.ids, newUser.id],
        films: { ...state.users, newUser }
      };
    }


    case userAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }

    default:
      return state;
  }
}

export const getIds = (state: State) => state.ids;
export const getUsers = (state: State) => state.users;
export const getSelected = (state: State) => state.selected;
