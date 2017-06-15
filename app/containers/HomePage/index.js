/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import Helmet from "react-helmet";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  makeSelectLocation,
  selectDialog,
  selectInitialize
} from "containers/App/selectors";
import Login from "../LoginContainer";
import Register from "../Register";
import { selectUser } from "containers/App/selectors";
import { showDialog } from "containers/App/actions";
import { selectLoginRequest } from "containers/LoginContainer/selectors";
import Navbar from "components/Navbar";
import Header from "components/Header";
import Destination from "components/Destination";
import SearchDestination from "components/SearchDestination";
import Advertise from "components/Advertise";
import Listing from "components/Listing";
import Book from "components/Book";
import Footer from "components/Footer";

import "assets/website/css/bootstrap.min.css";
// import "assets/website/css/app.css";
import "assets/website/css/website.css";

const mapDispatchToProps = dispatch => ({
  showDialog: dialog => dispatch(showDialog(dialog)),
  hideDialog: () => dispatch(showDialog(null))
  // loginRequest: data => dispatch(loginRequest(data))
});

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  initialize: selectInitialize(),
  user: selectUser(),
  dialog: selectDialog()
});

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }
  componentDidMount() {
    const userObject = JSON.parse(localStorage.getItem("user"));
    this.setState({
      isLoggedIn: userObject ? userObject.success : false
    });
  }
  // eslint-disable-line react/prefer-stateless-function
  handleDialog = form => {
    const dialog = form === "login"
      ? <Login onClose={() => this.props.hideDialog(null)} />
      : <Register onClose={() => this.props.hideDialog(null)} />;
    this.props.showDialog(dialog);
  };
  render() {
    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            {
              name: "description",
              content: "A React.js Boilerplate application homepage"
            }
          ]}
        />
        <Navbar userForm={this.handleDialog} user={this.state.isLoggedIn} />
        <Header />
        <SearchDestination />
        <Destination />
        {this.props.dialog}
        {/* <Advertise /> */}
        <Listing />
        <Book />
        <Footer />
      </article>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
