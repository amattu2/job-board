/*
 * Produced: Wed Jan 25 2023
 * Author: Alec M.
 * GitHub: https://amattu.com/links/github
 * Copyright: (C) 2023 Alec M.
 * License: License GNU Affero General Public License v3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import actions from '../Authenticate/actions';

const initialState = {
  isAuthenticated: false,
  loader: false,
  email: null,
  name: null,
  validateUserLoader: true,
  logOutLoader: false,
};

function Reducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.GET_AUTH_USER:
      return { ...state, validateUserLoader: true };
    case actions.GET_AUTH_USER_SUCCESS:
      return {
        ...state,
        validateUserLoader: false,
        isAuthenticated: !!action.payload.data.email,
        email: action.payload.data.email,
        name: action.payload.data.name,
      };
    case actions.GET_AUTH_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        validateUserLoader: false,
        email: null,
        name: null,
      };
    case actions.LOGIN:
      return { ...state, loader: true };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload.data.email,
        loader: false,
        email: action.payload.data.email,
        name: action.payload.data.name,
      };
    case actions.LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, loader: false };
    case actions.LOGOUT:
      return { ...state, logOutLoader: true };
    case actions.LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, logOutLoader: false };
    case actions.LOGOUT_FAILURE:
      return { ...state, isAuthenticated: false, logOutLoader: false };
    case actions.REGISTER:
      return { ...state, registerLoader: true };
    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!action.payload.data.email,
        registerLoader: false,
        email: action.payload.data.email,
        name: action.payload.data.name,
      };
    case actions.REGISTER_FAILURE:
      return { ...state, isAuthenticated: false, registerLoader: false };
    default:
      return state;
  }
}

export default Reducer;
