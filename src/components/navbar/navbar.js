import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import SearchBar from "../searchBar/searchBar";
import MobileSearchBar from "../mobileSearchBar/mobileSearchBar";
import logo from "../../assets/images/logo.png";

import "./navbar.css";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  const viewPortWidth = window.innerWidth;

  return (
    <div className="nav-back">
      <header>
        <img className="nav-logo" src={logo} alt="nav-logo" />
        <MobileSearchBar />
        <SearchBar />
        <nav>
          <NavLink
            to="/"
            exact
            className="nav-item"
            activeClassName="nav-item-active"
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            exact
            className="nav-item"
            activeClassName="nav-item-active"
          >
            Favorites
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
