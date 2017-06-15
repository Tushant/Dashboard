import { createSelector } from "reselect";

export const selectLogs = () => state => state.getIn(["logs", "logs"]);
