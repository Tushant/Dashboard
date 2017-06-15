// import { takeLatest, take, put, fork, cancel } from "redux-saga/effects";
// import { LOCATION_CHANGE, push } from "react-router-redux";
// import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./constants";
// import { signupSuccess, signupError } from "./actions";
// import { XcelTrip } from "containers/HomePage/sagas";
//
// function* redirectOnSuccess() {
//   const action = yield take(SIGNUP_SUCCESS);
//   yield put(push(`/`));
// }
//
// function* signupFlow(action) {
//   const successWatcher = yield fork(redirectOnSuccess);
//   yield fork(
//     XcelTrip.post("api/user/data", signupSuccess, signupError, action.data)
//   );
//   yield take([LOCATION_CHANGE, SIGNUP_ERROR]);
//   yield cancel(successWatcher);
// }
//
// function* signupWatcher() {
//   yield takeLatest(SIGNUP_REQUESTING, signupFlow);
// }
//
// export default [signupWatcher];
