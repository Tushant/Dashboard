import { fromJS } from "immutable";
import {
  LOAD_AGENT,
  LOAD_AGENT_SUCCESS,
  LOAD_AGENT_FAILURE
} from "./constants";

const initialState = fromJS({
  fetching: false,
  fetched: false,
  agents: {},
  errors: null
});

function agentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_AGENT:
      return state.set("fetching", true).set("fetched", false);
    case LOAD_AGENT_SUCCESS:
      console.log("action", action.agents.data);
      return state
        .set("fetching", false)
        .set("fetched", true)
        .set("agents", fromJS(action.agents.data));
    case LOAD_AGENT_FAILURE:
      return state.set("errors", action.error);
    default:
      return state;
  }
}

export default agentReducer;
