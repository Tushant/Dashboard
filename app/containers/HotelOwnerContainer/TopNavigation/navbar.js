import React from "react";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

const TopNavigation = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">XcelTrip</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="HotelOwner" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavigation;
