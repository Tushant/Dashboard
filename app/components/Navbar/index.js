import React from "react";
import { Link } from "react-router-dom";

import Logo from "assets/website/img/logo.svg";

let isDroppedDown = false;
const Navbar = ({ user, menus, userForm }) => {
  const menuItems = menus && menus.map(menu => <li key={menu}>{menu}</li>);
  return (
    <div className="navbar navbar-static-top" id="top" role="banner">
      <div id="header" className="container-fluid">
        <div className="navbar-header">
          <button
            className="navbar-toggle collapsed"
            type="button"
            data-toggle="collapse"
            data-target=".bs-navbar-collapse"
          >
            <span className="sr-only">Menu</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="index.html" className="navbar-brand">
            <img src={Logo} className="img-responsive" alt="xceltrip-logo" />
          </a>
        </div>
        <nav
          className="collapse navbar-collapse bs-navbar-collapse"
          role="navigation"
        >
          <ul className="nav navbar-nav navbar-right right-menu">
            <li className="rightsign sign1" onClick={() => userForm("signup")}>
              <a>Sign Up</a>
            </li>
            <li className="rightsign sign1" onClick={() => userForm("login")}>
              <a>{user ? "Sign out" : "Sign in"}</a>
            </li>
            <li id="view_help" style={{ float: "left" }} />
            <li className="lisyourspace">
              {" "}
              <a className="btn apply-for-agent" href="rooms/new.html">
                <span>Apply for agent</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
