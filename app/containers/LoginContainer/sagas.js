// import { takeLatest, take, put, fork, cancel } from "redux-saga/effects";
// import { LOCATION_CHANGE, push } from "react-router-redux";
// import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";
// import { loginSuccess, loginError } from "./actions";
// import { XcelTrip } from "containers/HomePage/sagas";
//
// function* redirectOnSuccess() {
//   const action = yield take(LOGIN_SUCCESS);
//   const role = action.user.data.userInfo.user_role;
//   switch (role) {
//     case "enduser":
//       yield put(push(`/user/dashboard/home`));
//     case "hoteladmin":
//       yield put(push(`/hotel/dashboard/home`));
//     case "superadmin":
//       yield put(push(`/admin/dashboard/home`));
//     case "agent":
//       yield put(push(`/agent/dashboard/home`));
//     default:
//       yield put(push(`/`));
//   }
// }
//
// function* loginFlow(action) {
//   const successWatcher = yield fork(redirectOnSuccess);
//   yield fork(XcelTrip.post("api/login", loginSuccess, loginError, action.data));
//   yield take([LOCATION_CHANGE, LOGIN_FAILURE]);
//   yield cancel(successWatcher);
// }
//
// function* loginWatcher() {
//   yield takeLatest(LOGIN_REQUEST, loginFlow);
// }
//
// export default [loginWatcher];
