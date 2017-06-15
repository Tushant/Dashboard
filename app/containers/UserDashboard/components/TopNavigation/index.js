import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import Logo from "assets/backend/img/logo.svg";

let isDroppedDown = false;
const TopNavigation = ({ username }) => {
  return (
    <header className="clearfix">
      <img className="logo" src={Logo} />
      <ul className="nav navbar-nav navbar-right">
        <li className={classnames("dropdown ", { open: isDroppedDown })}>
          <a
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => {
              isDroppedDown = !isDroppedDown;
            }}
          >

            {" "}
            {username && username}
            {" "}
            <span className="caret" />
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">Favourites</a></li>
            <li><a href="#">Profile</a></li>
            <li />
            <li>
              <a href="#" onClick={() => localStorage.removeItem("token")}>
                Sign out
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default TopNavigation;
