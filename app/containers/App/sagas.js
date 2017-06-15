import React from "react";
import { request, requestJSON } from "utils/request";
import {
  takeLatest,
  take,
  call,
  put,
  fork,
  cancel,
  select
} from "redux-saga/effects";
import { LOCATION_CHANGE, push } from "react-router-redux";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "containers/LoginContainer/constants";
import { loginSuccess, loginError } from "containers/LoginContainer/actions";
import {
  SIGNUP_REQUESTING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "containers/Register/constants";
import { signupSuccess, signupError } from "containers/Register/actions";
import { selectUser } from "containers/App/selectors";
import Login from "containers/LoginContainer";

import {
  loadInitialDataSuccess,
  loadInitialDataError,
  showDialog,
  loadUserProfileSuccess
} from "containers/App/actions";

import {
  API_BASE,
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR,
  LOAD_USER_PROFILE_SUCCESS
} from "containers/App/constants";

export class XcelTrip {
  /**
   * Generic api data loader
   */
  static dataLoader(apiUri, onSuccess, onError, data, ...actionArguments) {
    return function*() {
      // eslint-disable-line func-names
      const requestURL = `${API_BASE}${apiUri}`;
      console.log("actionArgument", actionArguments[0]);
      const token = actionArguments[0];
      try {
        let options;
        if (data !== undefined) {
          // If we have data to post
          options = {
            method: data._id ? "PUT" : "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
              "Access-Control-Allow-Origin": "*",
              Authorization: `${token}`
            }
          };
        }
        const response = yield call(requestJSON, requestURL, options);
        yield put(onSuccess(response, ...actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (_) {
          error = {
            errors: [
              {
                code: e.response.status,
                msg: e.response.statusText
              }
            ]
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  static get(apiUri, onSuccess, onError, ...actionArguments) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      undefined,
      ...actionArguments
    );
  }

  /*
   * Shorthand POST function
   */
  static post(apiUri, onSuccess, onError, data, ...actionArguments) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      data,
      ...actionArguments
    );
  }

  static put(apiUri, onSuccess, onError, data, ...actionArguments) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      data,
      ...actionArguments
    );
  }

  static delete(apiUri, onSuccess, onError, ...actionArguments) {
    return function*() {
      // eslint-disable-line func-names
      const requestURL = `${API_BASE}${apiUri}`;
      try {
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
            "X-Requested-With": "XMLHttpRequest"
          }
        };
        yield call(request, requestURL, options);
        yield put(onSuccess(...actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (_) {
          error = {
            errors: [
              {
                code: e.response.status,
                msg: e.response.statusText
              }
            ]
          };
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }
}

function* redirectOnSuccess() {
  const action = yield take(LOGIN_SUCCESS);
  const user = yield select(selectUser());
  console.log("user redirect", user.toJS());
  const userInfo = user.get("userInfo");
  if (userInfo["user_role"] === "enduser") {
    yield put(push("user/dashboard/home"));
  } else if (userInfo["user_role"] === "superadmin") {
    yield put(push("admin/dashboard/home"));
  } else if (userInfo["user_role"] === "agent") {
    yield put(push("agent/dashboard/home"));
  } else if (userInfo["user_role"] === "hotel") {
    yield put(push("hotel/dashboard/home"));
  }
}

function* redirectOnSignupSuccess() {
  const action = yield take(SIGNUP_SUCCESS);
  yield put(showDialog(<Login />));
}

function* signupFlow(action) {
  console.log("signuprequest");
  const successWatcher = yield fork(redirectOnSignupSuccess);
  yield fork(
    XcelTrip.post("api/user/data", signupSuccess, signupError, action.data)
  );
  yield take([LOCATION_CHANGE, SIGNUP_ERROR]);
  yield cancel(successWatcher);
}

function* loginFlow(action) {
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(XcelTrip.post("api/login", loginSuccess, loginError, action.data));
  yield take([LOCATION_CHANGE, LOGIN_FAILURE]);
  yield cancel(successWatcher);
}

function* loadInitialData(action) {
  console.log("action");
  // yield call(
  //   XcelTrip.get(`api/user/data/`, loadUserProfileSuccess, loadInitialDataError)
  // );
}

function* initialize() {
  console.log("watching");
  const watcher = yield fork(loadInitialData);
  yield take([INITIALIZE_ERROR, INITIALIZE_SUCCESS]);
  yield cancel(watcher);
}

function* rootSaga() {
  yield takeLatest(INITIALIZE, initialize);
  yield takeLatest(LOGIN_REQUEST, loginFlow);
  yield takeLatest(SIGNUP_REQUESTING, signupFlow);
  // yield takeLatest(LOAD_USER_PROFILE_SUCCESS, loadUserProfile);
}

export default [rootSaga];
