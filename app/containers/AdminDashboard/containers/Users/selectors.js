import { createSelector } from "reselect";

export const selectUsers = () => state => state.getIn(["userReducer", "users"]);
