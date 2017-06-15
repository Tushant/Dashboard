/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "./constants";

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    data
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function loginError(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
