import { takeLatest, call } from "redux-saga/effects";

import { rolesFetched, rolesFetchingError } from "./actions";
import { ROLES_FETCH_REQUEST } from "./constants";

import { XcelTrip } from "containers/App/sagas";

function* fetchRoles() {
  yield call(
    XcelTrip.get("api/configuration/role", rolesFetched, rolesFetchingError)
  );
}

function* rolesWatcher() {
  yield takeLatest(ROLES_FETCH_REQUEST, fetchRoles);
}

export default [rolesWatcher];
