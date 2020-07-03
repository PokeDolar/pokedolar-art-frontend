import React from "react";

import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Link className="main-navigation__anchor" to="/">
        <h1 className="main-navigation__title">PokeDólar</h1>
      </Link>
      <nav>
        <div>
          <Link to="/pokemon"><h2>Pokémon</h2></Link>
        </div>
        <div>
          <Link to="/pokeart"><h2>PokeArt</h2></Link>
        </div>
        <div>
          <Link to="/users"><h2>Users</h2></Link>
        </div>
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
