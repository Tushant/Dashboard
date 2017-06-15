import { fromJS } from "immutable";

import {
  LOGS_FETCH_REQUEST,
  LOGS_FETCH_SUCCESS,
  LOGS_FETCH_FAILURE
} from "./constants";

const initialState = fromJS({
  requesting: false,
  successful: false,
  logs: {},
  error: null
});

function showLogs(state = initialState, action) {
  switch (action.type) {
    case LOGS_FETCH_REQUEST:
      return state.set("requesting", true).set("successful", false);
    case LOGS_FETCH_SUCCESS:
      return state
        .set("requesting", false)
        .set("successful", true)
        .set("logs", fromJS(action.logs.data));
    case LOGS_FETCH_FAILURE:
      return state.set("error", action.error);
    default:
      return state;
  }
}

export default showLogs;
