import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/pokemon">PokéDex</NavLink>
    </li>
    <li>
      <NavLink to="/pokeart">ArtDex</NavLink>
    </li>

    <li>
      <NavLink to="/users">Enviar</NavLink>
    </li>
    <li>
      <NavLink to="/users">Minhas Artes</NavLink>
    </li>
    <li>
      <NavLink to="/users">Login</NavLink>
    </li>
  </ul>
};

export default NavLinks;