import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="header">
    <h1> 🎉 House Warming Ceremony e-Invitation 🎉</h1>
    <ul className="navbar">
      <li>
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/bus-routes">Bus</NavLink>
      </li>
      <li>
        <NavLink to="/directions">Directions</NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
