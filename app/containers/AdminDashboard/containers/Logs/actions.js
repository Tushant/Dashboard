import {
  LOGS_FETCH_REQUEST,
  LOGS_FETCH_SUCCESS,
  LOGS_FETCH_FAILURE
} from "./constants";

export function logRequest() {
  return {
    type: LOGS_FETCH_REQUEST
  };
}

export function logFetched(logs) {
  return {
    type: LOGS_FETCH_SUCCESS,
    logs
  };
}

export function logFetchingError(error) {
  return {
    type: LOGS_FETCH_FAILURE,
    error
  };
}
