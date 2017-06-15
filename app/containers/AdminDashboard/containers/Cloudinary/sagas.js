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

import {
  cloudinarySuccess,
  cloudinaryFailure,
  cloudinaryFetched,
  cloudinaryFetchingError
} from "./actions";
import {
  CLOUDINARY_SETUP_REQUEST,
  CLOUDINARY_SETUP_SUCCESS,
  CLOUDINARY_SETUP_FAILURE,
  CLOUDINARY_FETCH_REQUEST
} from "./constants";

import { selectCloudinary } from "./selectors";
import { XcelTrip } from "containers/App/sagas";

function* redirectOnSuccess() {
  const action = yield take(CLOUDINARY_SETUP_SUCCESS);
  yield put(push("/admin/dashboard"));
}

function* fetchCloudinary() {
  yield call(
    XcelTrip.get(
      "api/configuration/cloudinary",
      cloudinaryFetched,
      cloudinaryFetchingError
    )
  );
}

function* setupCloudinary(action) {
  let cloudinary = yield select(selectCloudinary());
  console.log("cloudinary", cloudinary);
  // update the cloudinary
  cloudinary = cloudinary.mergeDeep(action.data);
  console.log("cloudinary after mergeDeep", cloudinary);
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    XcelTrip.post(
      "api/configuration/cloudinary",
      cloudinarySuccess,
      cloudinaryFailure,
      cloudinary.toJS()
    )
  );
  yield take([LOCATION_CHANGE, CLOUDINARY_SETUP_FAILURE]);
  yield cancel(successWatcher);
}

function* cloudinaryWatcher() {
  yield takeLatest(CLOUDINARY_SETUP_REQUEST, setupCloudinary);
  yield takeLatest(CLOUDINARY_FETCH_REQUEST, fetchCloudinary);
}

export default [cloudinaryWatcher];
