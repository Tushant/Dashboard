import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "containers/HomePage";
import { loadInitialData } from "./actions";
// import withProgressBar from "components/ProgressBar";
import Routes from "routes";

const mapDispatchToProps = dispatch => ({
  loadInitialData: () => dispatch(loadInitialData())
});

class App extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - XcelTrip"
          defaultTitle="XcelTrip"
          meta={[{ name: "description", content: "XcelTrip" }]}
        />
        <Routes />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
