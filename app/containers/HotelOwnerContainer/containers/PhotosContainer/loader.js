/**
 * Created by Edge on 6/5/2017.
 */
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
    injectReducer("hotelOwnerPhotosContainer", reducer.default);
    injectSagas("photosSaga", sagas.default);
    cb(component);
  });

  importModules.catch(errorLoading);
};
