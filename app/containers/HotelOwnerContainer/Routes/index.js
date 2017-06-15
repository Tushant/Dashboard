/**
 * Created by Edge on 6/5/2017.
 */
import React from "react";
import { Switch } from "react-router-dom";
import AsyncRoute from "routing/AsyncRoute";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectLocation } from "containers/App/selectors";
import loadBookingsPage from "../containers/BookingsContainer/loader";
import loadContentPage from "../containers/ContentContainer/loader";
import loadCurrentTransactionPage
  from "../containers/CurrentTransactionContainer/loader";
import loadFacilitiesPage from "../containers/FacilitiesContainer/loader";
import loadMapPage from "../containers/MapContainer/loader";
import loadPhotosPage from "../containers/PhotosContainer/loader";
import loadReviewsPage from "../containers/ReviewsContainer/loader";
import loadNotFoundPage from "containers/NotFoundPage/loader";

function HotelOwnerRoutes({ location }) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <Switch>
          <h1>Hotel Owner Dashboard</h1>
          <AsyncRoute exact path="/bookings" load={loadBookingsPage} />
          <AsyncRoute exact path="/content" load={loadContentPage} />
          <AsyncRoute
            exact
            path="/current_transaction"
            load={loadCurrentTransactionPage}
          />
          <AsyncRoute exact path="/facilities" load={loadFacilitiesPage()} />
          <AsyncRoute exact path="/map" load={loadMapPage()} />
          <AsyncRoute exact path="/photos" load={loadPhotosPage()} />
          <AsyncRoute exact path="/reviews" load={loadReviewsPage} />

          <AsyncRoute path="" load={loadNotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

HotelOwnerRoutes.propTypes = {
  location: React.PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()
});

export default connect(mapStateToProps)(HotelOwnerRoutes);
