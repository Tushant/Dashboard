// /*
//  * HomeReducer
//  *
//  * The reducer takes care of our data. Using actions, we can change our
//  * application state.
//  * To add a new action, add it to the switch statement in the reducer function
//  *
//  * Example:
//  * case YOUR_ACTION_CONSTANT:
//  *   return state.set('yourStateVariable', true);
//  */
// import { fromJS } from "immutable";
//
// import { CHANGE_USERNAME } from "./constants";
// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE
// } from "../LoginContainer/constants";
// // The initial state of the App
// const initialState = fromJS({
//   username: "",
//   userInfo: {},
//   token: "",
//   isLoggedIn: false
// });
//
// function homeReducer(state = initialState, action) {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//       return state;
//     case LOGIN_SUCCESS:
//       return state
//         .set("token", action.user.data.token)
//         .set("userInfo", action.user.data.userInfo)
//         .set("isLoggedIn", true)
//         .set("username", action.user.data.userInfo.username);
//     case LOGIN_FAILURE:
//       return state;
//     default:
//       return state;
//   }
// }
//
// export default homeReducer;
