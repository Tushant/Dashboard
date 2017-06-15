import { createSelector } from "reselect";

export const selectAgents = () => state =>
  state.getIn(["agentReducer", "agents"]);
