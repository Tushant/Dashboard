import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Helmet from "react-helmet";
import { Router, Switch } from "react-router-dom";
import TopNavigation from "./components/TopNavigation/navbar";
import SideNavigation from "./components/SideNavigation";
import Routes from "./Routes";

import { makeSelectLocation } from "containers/App/selectors";
import { selectCloudinary } from "./containers/Cloudinary/selectors";
import { selectHome } from "containers/HomePage/selectors";
import { loadInitialData } from "containers/App/actions";
import "assets/backend/css/bootstrap_dashboard.css";
import "assets/backend/css/app_dashboard.css";

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  user: selectHome()
});

class AdminDashboard extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - XcelTrip| Admin Dashboard"
          defaultTitle="XcelTrip | Admin Dashboard"
          meta={[
            { name: "description", content: "Admin Dashboard for XcelTrip" }
          ]}
        />
        <TopNavigation />
        <main>
          <SideNavigation />
          <Routes />
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(AdminDashboard);
