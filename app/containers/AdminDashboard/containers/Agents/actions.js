import {
  LOAD_AGENT,
  LOAD_AGENT_SUCCESS,
  LOAD_AGENT_FAILURE
} from "./constants";

export function loadAgents() {
  return {
    type: LOAD_AGENT
  };
}

export function agentLoaded(agents) {
  return {
    type: LOAD_AGENT_SUCCESS,
    agents
  };
}

export function agentLoadingError(error) {
  return {
    type: LOAD_AGENT_FAILURE,
    error
  };
}
