import {
  ROLES_FETCH_REQUEST,
  ROLES_FETCH_SUCCESS,
  ROLES_FETCH_FAILURE
} from "./constants";

export function fetchRoles() {
  return {
    type: ROLES_FETCH_REQUEST
  };
}

export function rolesFetched(roles) {
  return {
    type: ROLES_FETCH_SUCCESS,
    roles
  };
}

export function rolesFetchingError(error) {
  return {
    type: ROLES_FETCH_ERROR,
    error
  };
}
