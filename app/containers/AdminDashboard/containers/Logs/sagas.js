import {
  takeLatest,
  fork,
  put,
  cancel,
  take,
  select,
  call
} from "redux-saga/effects";

import { logFetched, logFetchingError } from "./actions";
import { LOGS_FETCH_REQUEST } from "./constants";

import { XcelTrip } from "containers/App/sagas";

function* fetchLogs() {
  yield call(XcelTrip.get("api/error-logs", logFetched, logFetchingError));
}

function* logWatcher() {
  yield takeLatest(LOGS_FETCH_REQUEST, fetchLogs);
}

export default [logWatcher];
