/**
 * The global state selectors
 */

import { createSelector } from "reselect";

const selectGlobal = () => state => {
  console.log("state", state.toJS());
  return state.get("global");
};

const selectUser = () => state => {
  console.log("state", state.toJS());
  return state.get("login");
};

const selectRoute = state => state.get("route");

export const selectInitialize = () => state =>
  state.getIn(["global", "initialized"]);

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get("location").toJS());

const selectHome = () => state => state.get("home");

const selectDialog = () => state => state.getIn(["global", "dialog"]);

export {
  selectGlobal,
  selectDialog,
  makeSelectLocation,
  selectHome,
  selectUser
};
