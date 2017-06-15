import { fromJS } from "immutable";
import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from "./constants";

const initialState = fromJS({
  fetching: false,
  fetched: false,
  users: {},
  errors: null
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return state.set("fetching", true).set("fetched", false);
    case LOAD_USER_SUCCESS:
      console.log("action", action.users.data);
      return state
        .set("fetching", false)
        .set("fetched", true)
        .set("users", fromJS(action.users.data));
    case LOAD_USER_FAILURE:
      return state.set("errors", action.error);
    default:
      return state;
  }
}

export default userReducer;
