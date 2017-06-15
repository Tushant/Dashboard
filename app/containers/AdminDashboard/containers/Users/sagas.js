import {
  takeLatest,
  fork,
  put,
  cancel,
  take,
  select,
  call
} from "redux-saga/effects";
import { LOCATION_CHANGE, push } from "react-router-redux";

import { userLoaded, userLoadingError } from "./actions";
import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from "./constants";

import { selectUsers } from "./selectors";
import { XcelTrip } from "containers/App/sagas";

function* loadUser(action) {
  console.log(
    "localstorage",
    JSON.parse(localStorage.getItem("user"))["token"]
  );
  yield call(XcelTrip.get("api/user/data", userLoaded, userLoadingError));
}

function* userWatcher() {
  yield takeLatest(LOAD_USER, loadUser);
}

export default [userWatcher];
