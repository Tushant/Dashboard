/*
 *
 * Asynchronously loads the components for HotelOwnerContainer
 *
 */

import { errorLoading, getAsyncInjectors } from "utils/asyncInjectors";

export default (store, cb) => {
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  const importModules = Promise.all([
    import("./reducer"),
    import("./sagas"),
    import("./index")
  ]);

  importModules.then(([reducer, sagas, component]) => {
    injectReducer("hotelOwnerContainer", reducer.default);
    injectSagas("hotelOwnerSaga", sagas.default);
    cb(component);
  });

  importModules.catch(errorLoading);
};
