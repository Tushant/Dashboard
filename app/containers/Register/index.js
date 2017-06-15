import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Modal, Button } from "react-bootstrap";

import { signupRequest } from "./actions";
import { showDialog } from "containers/App/actions";
import { selectSignupRequest } from "./selectors";
import Login from "containers/LoginContainer";

// import child from "assets/backend/img/child.jpg";

const mapDispatchToProps = dispatch => ({
  signupRequest: values => dispatch(signupRequest(values)),
  showDialog: dialog => dispatch(showDialog(dialog)),
  hideDialog: () => dispatch(showDialog("null"))
});

const mapStateToProps = createStructuredSelector({
  userSignupRequest: selectSignupRequest()
});

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        agree_terms_condition: false,
        email_offer_subscription: false
      },
      apartment: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
      show_password: false
    };
  }

  handlePasswordChecked = () =>
    this.setState({ show_password: !this.state.show_password });

  handleTermsChecked = () => {
    this.setState({
      user: {
        ...this.state.user,
        agree_terms_condition: !this.state.agree_terms_condition
      }
    });
  };

  handleSubscribtionChecked = () => {
    this.setState({
      user: {
        ...this.state.user,
        email_offer_subscription: !this.state.email_offer_subscription
      }
    });
  };

  handleCountryChange = e => this.setState({ country: e.target.value });

  handleChange = e => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signupRequest(this.state.user);
  };

  render() {
    const { show_password, user } = this.state;
    return (
      <Modal show onHide={() => this.props.hideDialog()}>
        <Modal.Header closeButton>
          <Modal.Title>Signup with Email</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group form-block">
            <input
              type="text"
              name="first_name"
              className="form-control-form "
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group form-block">
            <input
              type="text"
              name="last_name"
              className="form-control-form "
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group form-block">
            <input
              type="email"
              name="email"
              className="form-control-form "
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group form-block">
            <input
              type={show_password ? "text" : "password"}
              name="password"
              className="form-control-form"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="checkbox meta">
            <label>
              <input
                type="checkbox"
                required="required"
                onChange={this.handleTermsChecked}
                checked={user.agree_terms_condition}
              />
              {" "}
              I agree the terms and conditions.
              {" "}
              <a href="terms.html">Learn more</a>
            </label>
          </div>
          <div className="checkbox meta">
            <label>
              <input
                type="checkbox"
                onChange={this.handleSubscribtionChecked}
                checked={user.email_offer_subscription}
              />
              {" "}
              Subscribe for newsletter
              {" "}
              <a href="terms.html">Learn more</a>
            </label>
          </div>
          <button
            id="btnSubmit"
            className="btn btn-lgin btn-primary btn-block btn-lg"
            type="submit"
          >
            Join Now
          </button>
        </form>
        <Modal.Footer>
          <div className="row">
            <dv className="col-md-6">
              <p className="ta-l">Already a Member? </p>
            </dv>
            <div className="col-md-4 col-md-offset-2">
              <a
                className="btn-gst"
                onClick={() => this.props.showDialog(<Login />)}
              >
                Login
              </a>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
