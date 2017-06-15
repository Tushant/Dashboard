import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from "./constants";

export function loadUsers() {
  return {
    type: LOAD_USER
  };
}

export function userLoaded(users) {
  return {
    type: LOAD_USER_SUCCESS,
    users
  };
}

export function userLoadingError(error) {
  return {
    type: LOAD_USER_FAILURE,
    error
  };
}
