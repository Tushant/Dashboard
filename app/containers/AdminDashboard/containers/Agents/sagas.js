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

import { agentLoaded, agentLoadingError } from "./actions";
import {
  LOAD_AGENT,
  LOAD_AGENT_SUCCESS,
  LOAD_AGENT_FAILURE
} from "./constants";

import { selectAgents } from "./selectors";
import { XcelTrip } from "containers/App/sagas";

function* loadAgent(action) {
  const token = JSON.parse(localStorage.getItem("user"))["token"];
  yield call(
    XcelTrip.get(
      "api/agent/applicant/data",
      agentLoaded,
      agentLoadingError,
      token
    )
  );
}

function* agentWatcher() {
  yield takeLatest(LOAD_AGENT, loadAgent);
}

export default [agentWatcher];
