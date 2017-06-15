// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

import React from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import AsyncRoute from "routing/AsyncRoute";
import { makeSelectLocation } from "containers/App/selectors";

import loadHomePage from "containers/HomePage/loader";
import loadAdminDashboardParent from "containers/AdminDashboard/loader";
import loadUserDashboardParent from "containers/UserDashboard/loader";
import loadHotelOwnerParent from "containers/HotelOwnerContainer/loader";
import loadFeaturePage from "containers/FeaturePage/loader";
import loadSignupPage from "containers/Register/loader";
import loadLoginPage from "containers/LoginContainer/loader";
import loadForgotPasswordPage
  from "containers/LoginContainer/ForgotPassword/loader";
import loadNotFoundPage from "containers/NotFoundPage/loader";

function Routes({ location, ...props }) {
  return (
    <Switch location={location}>
      <AsyncRoute exact path="/" load={loadHomePage} />
      <AsyncRoute path="/signup" load={loadSignupPage} />
      <AsyncRoute path="/login" load={loadLoginPage} />
      <AsyncRoute path="/forgot-password" load={loadForgotPasswordPage} />
      <AsyncRoute path="/admin/dashboard" load={loadAdminDashboardParent} />
      <AsyncRoute path="/user/dashboard" load={loadUserDashboardParent} />
      <AsyncRoute path="/hotel/dashboard" load={loadHotelOwnerParent} />
      <AsyncRoute path="" load={loadNotFoundPage} />
    </Switch>
  );
}

Routes.propTypes = {
  location: React.PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()
});

export default connect(mapStateToProps)(Routes);
