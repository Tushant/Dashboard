import React from "react";
import { Link } from "react-router-dom";

const sideMenus = [
  {
    menu: "Dashboard",
    link: "admin/dashboard/home",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Agent Commission Setup",
    link: "admin/dashboard/commission",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Email Template",
    link: "admin/dashboard/email_template",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Email Service Setup",
    link: "admin/dashboard/email_service",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Cloudinary Settings",
    link: "admin/dashboard/cloudinary",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Google Analytics",
    link: "admin/dashboard/analytics",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Role",
    link: "admin/dashboard/roles",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Logs",
    link: "admin/dashboard/logs",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Users",
    link: "admin/dashboard/users",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Agents",
    link: "admin/dashboard/agents",
    image: require("assets/backend/img/box.svg")
  }
];

const SideNavigation = () => {
  const menuToShow = sideMenus.map(menuItem => {
    return (
      <li key={menuItem.link}>
        <Link to={`/${menuItem.link}`}>
          <img src={menuItem.image} alt="dashboard" />
          <span>{menuItem.menu}</span>
        </Link>
      </li>
    );
  });
  return (
    <nav>
      <ul>
        {menuToShow}
      </ul>
    </nav>
  );
};

export default SideNavigation;
