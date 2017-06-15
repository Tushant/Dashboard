import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

import Logo from "assets/backend/img/logo.svg";

const TopNavigation = () => {
  return (
    <header className="clearfix">
      <img className="logo" src={Logo} />
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="img/noProfile.svg" />
            {" "}
            Tushant Khatiwada
            {" "}
            <span className="caret" />
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">Favourites</a></li>
            <li><a href="#">Profile</a></li>
            <li />
            <li><a href="#">Sign out</a></li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default TopNavigation;
