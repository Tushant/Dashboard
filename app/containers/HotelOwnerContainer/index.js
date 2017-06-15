/*
 *
 * HotelOwnerContainer
 *
 */

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Helmet from "react-helmet";
import { Switch } from "react-router-dom";
import TopNavigation from "./TopNavigation/navbar";
import SideNavigation from "./SideNavigation";
import loadContentContainer from "./containers/ContentContainer";
import { makeSelectLocation } from "containers/App/selectors";
import { selectHome } from "containers/HomePage/selectors";
import AsyncRoute from "routing/AsyncRoute";

import makeSelectHotelOwnerContainer from "./selectors";

export class HotelOwnerContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log("login", this.props.user.toJS());
    return (
      <div>
        <div>
          <Helmet
            titleTemplate="%s - XcelTrip| HotelOwner Dashboard"
            defaultTitle="XcelTrip | HotelOwner Dashboard"
            meta={[
              {
                name: "description",
                content: "HotelOwner Dashboard for XcelTrip"
              }
            ]}
          />
          <TopNavigation />
          <div className="container">
            <div className="affix-container">
              <SideNavigation />
              <Switch location={location}>
                <AsyncRoute
                  exact
                  path="/hotel/owner/content"
                  load={loadContentContainer}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HotelOwnerContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  HotelOwnerContainer: makeSelectHotelOwnerContainer(),
  location: makeSelectLocation()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  HotelOwnerContainer
);
