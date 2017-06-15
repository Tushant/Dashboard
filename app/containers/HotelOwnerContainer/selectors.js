import { createSelector } from 'reselect';

/**
 * Direct selector to the hotelOwnerContainer state domain
 */
const selectHotelOwnerContainerDomain = () => (state) => state.get('hotelOwnerContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HotelOwnerContainer
 */

const makeSelectHotelOwnerContainer = () => createSelector(
  selectHotelOwnerContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHotelOwnerContainer;
export {
  selectHotelOwnerContainerDomain,
};
