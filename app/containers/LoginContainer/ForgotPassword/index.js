import React from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { showDialog } from "containers/App/actions";

const mapDispatchToProps = dispatch => ({
  hideDialog: () => dispatch(showDialog("null")),
  // handleForgotPassword: (username) => dispatch(forgotPassword(username)),
});

class ForgotPassword extends React.PureComponent {
  state = { email: ''};

  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting. here we dispatch the given email to handleForgotPassword');
  };

  render() {
    return (
      <Modal show onHide={() => this.props.hideDialog()}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password?</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group form-block">
            <input
              type="email"
              name="email"
              className="form-control-form "
              placeholder="Email"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group form-block">
            <button type="submit" className="btn btn-lgin">Submit</button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default connect(null, mapDispatchToProps)(ForgotPassword);
