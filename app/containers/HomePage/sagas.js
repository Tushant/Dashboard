// import { request, requestJSON } from "utils/request";
// import { takeLatest, take, call, put, fork, cancel } from "redux-saga/effects";
//
// import {
//   loadInitialDataSuccess,
//   loadInitialDataError
// } from "containers/App/actions";
//
// import {
//   API_BASE,
//   INITIALIZE,
//   INITIALIZE_SUCCESS,
//   INITIALIZE_ERROR
// } from "containers/App/constants";
//
// export class XcelTrip {
//   /**
//    * Generic api data loader
//    */
//   static dataLoader(apiUri, onSuccess, onError, data, ...actionArguments) {
//     return function*() {
//       // eslint-disable-line func-names
//       const requestURL = `${API_BASE}${apiUri}`;
//       try {
//         let options;
//         if (data !== undefined) {
//           // If we have data to post
//           options = {
//             method: data._id ? "PUT" : "POST",
//             body: JSON.stringify(data),
//             headers: {
//               "Content-Type": "application/json",
//               "X-Requested-With": "XMLHttpRequest",
//               "Access-Control-Allow-Origin": "*"
//             }
//           };
//         }
//         const response = yield call(requestJSON, requestURL, options);
//         console.log("response", response);
//         yield put(onSuccess(response, ...actionArguments));
//       } catch (e) {
//         let error = null;
//         try {
//           error = yield call(() => e.response.json());
//         } catch (_) {
//           error = {
//             errors: [
//               {
//                 code: e.response.status,
//                 msg: e.response.statusText
//               }
//             ]
//           };
//         }
//         yield put(onError(error, ...actionArguments));
//       }
//     };
//   }
//
//   /*
//    * Shorthand GET function
//    */
//   static get(apiUri, onSuccess, onError, ...actionArguments) {
//     return this.dataLoader(
//       apiUri,
//       onSuccess,
//       onError,
//       undefined,
//       ...actionArguments
//     );
//   }
//
//   /*
//    * Shorthand POST function
//    */
//   static post(apiUri, onSuccess, onError, data, ...actionArguments) {
//     return this.dataLoader(
//       apiUri,
//       onSuccess,
//       onError,
//       data,
//       ...actionArguments
//     );
//   }
//
//   static put(apiUri, onSuccess, onError, data, ...actionArguments) {
//     return this.dataLoader(
//       apiUri,
//       onSuccess,
//       onError,
//       data,
//       ...actionArguments
//     );
//   }
//
//   /**
//    * Shorthand DELETE function
//    */
//   static delete(apiUri, onSuccess, onError, ...actionArguments) {
//     return function*() {
//       // eslint-disable-line func-names
//       const requestURL = `${API_BASE}${apiUri}`;
//       try {
//         const options = {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             "X-CSRFToken": Cookies.get("csrftoken"),
//             "X-Requested-With": "XMLHttpRequest"
//           }
//         };
//         yield call(request, requestURL, options);
//         yield put(onSuccess(...actionArguments));
//       } catch (e) {
//         let error = null;
//         try {
//           error = yield call(() => e.response.json());
//         } catch (_) {
//           error = {
//             errors: [
//               {
//                 code: e.response.status,
//                 msg: e.response.statusText
//               }
//             ]
//           };
//         }
//         yield put(onError(error, ...actionArguments));
//       }
//     };
//   }
// }
//
// function* loadInitialData() {
//   console.log("load");
//   // // yield call(
//   // //   XcelTrip.get(
//   // //     "api/configuration/cloudinary",
//   // //     cloudinaryFetched,
//   // //     cloudinaryFetchingError
//   // //   )
//   // );
//   // yield put(loadInitialDataSuccess());
// }
//
// /**
//  * Initial Data loader saga
//  */
// function* initialize() {
//   console.log("watching");
//   const watcher = yield fork(loadInitialData);
//   yield take([INITIALIZE_ERROR, INITIALIZE_SUCCESS]);
//   yield cancel(watcher);
// }
//
// /**
//  * Root saga manages watcher lifecycle
//  */
//
// function* appSaga() {
//   console.log("loading");
//   yield takeLatest(INITIALIZE, initialize);
// }
//
// // Sagas
//
// export default [appSaga];
