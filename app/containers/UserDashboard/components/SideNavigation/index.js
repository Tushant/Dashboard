import React from "react";
import { Link } from "react-router-dom";

const sideMenus = [
  {
    menu: "Dashboard",
    link: "user/dashboard/home",
    image: require("assets/backend/img/box.svg")
  },
  {
    menu: "Appy For Agent",
    link: "user/dashboard/apply_for_agent",
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
