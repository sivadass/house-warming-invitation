import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="header">
    <h1> 🎉 Sivadass House Warming Party!</h1>
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
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
