import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import Banner from "./banner.jpg";
import messages from "./messages";

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="welcome-message">
              <strong>XcelTrip</strong> welcomes you <br />
              you can explore many hotels and destinations
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
