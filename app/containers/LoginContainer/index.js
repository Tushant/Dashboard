import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Modal } from "react-bootstrap";
import { loginRequest } from "./actions";
import { showDialog } from "containers/App/actions";
import { selectLoginRequest } from "./selectors";
// import { selectSignupRequest } from "../Register/selectors";
import ForgotPassword from "./ForgotPassword";
import Register from "containers/Register";
// import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
  loginRequest: values => dispatch(loginRequest(values)),
  showDialog: dialog => dispatch(showDialog(dialog)),
  hideDialog: () => dispatch(showDialog("null"))
});

const mapStateToProps = createStructuredSelector({
  userLoginRequest: selectLoginRequest(),
  // userSignupRequest: selectSignupRequest(),
});

class LoginContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: ""
      },
      err: null,
      remember_me: false
    };
  }

  handleRememberMe = () => {
    this.setState({ remember_me: !this.state.remember_me });
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginRequest(this.state.credentials);
  };

  render() {
    const { credentials } = this.state;
    const { userLoginRequest } = this.props;
    let notice = null;
    // if (userSignupRequest.get("successful")) {
    //   notice = <p className="alert alert-success">Thanks for joining us</p>;
    // }

    let err = userLoginRequest.get("errors");
    if (err && err.size > 0) {
      let error = err.get("body").data;
      notice = error.message ? <p className="alert alert-danger">{error.message}</p> : <p className="alert alert-danger">{error}</p> ;
    }

    return (
      <Modal show onHide={() => this.props.hideDialog()}>
        <Modal.Header closeButton>
          <Modal.Title>
            Login
            {notice && notice}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group form-block">
            <input
              type="text"
              name="username"
              value={credentials.username}
              className="form-control-form "
              placeholder="Username"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group form-block">
            <input
              type="password"
              name="password"
              value={credentials.password}
              className="form-control-form "
              placeholder="Password"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="checkbox meta">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
            </div>
            <div className="col-md-4 col-md-offset-2">
              <p>
                <a
                  onClick={() => this.props.showDialog(<ForgotPassword />)}
                  className="frgt-pswd"
                >
                  Forgot Password ?
                </a>
              </p>
            </div>
          </div>
          <button
            id="btnSubmit"
            className="btn btn-lgin btn-primary btn-block btn-lg"
            type="submit"
          >
            Login
          </button>
        </form>
        <Modal.Footer>
          <div className="row">
            <div className="col-md-6">
              <p className="ta-l">Don't have an account ? </p>
            </div>
            <div className="col-md-4 col-md-offset-2">
              <a
                className="btn-gst"
                onClick={() => this.props.showDialog(<Register />)}
              >
                Sign Up
              </a>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
