import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/pokeart">ArtDex</NavLink>
    </li>
    <li>
      <NavLink to="/pokemon">PokéDex</NavLink>
    </li>

    {/* <li>
      <NavLink to="/users">Enviar</NavLink>
    </li>
    <li>
      <NavLink to="/users">Minhas Artes</NavLink>
    </li> */}
    <li>
      <a href="http://192.168.15.57:5555/login">Login</a>
    </li>
  </ul>
};

export default NavLinks;