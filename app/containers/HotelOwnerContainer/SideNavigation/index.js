import React from "react";
import { Link } from "react-router-dom";

const sideMenus = [
  { menu: "Basic Information", link: "content" },
  { menu: "Map", link: "map" },
  { menu: "Facilities", link: "facilities" },
  { menu: "Photos", link: "photos" },
  { menu: "Reviews", link: "reviews" }
];

const SideNavigation = () => {
  const menuToShow = sideMenus.map(menuItem => {
    return (
      <li key={menuItem.link}>
        <Link to={`/${menuItem.link}`}>{menuItem.menu}</Link>
      </li>
    );
  });
  return (
    <div className="affix">
      <nav>
        <ul>
          {menuToShow}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavigation;
