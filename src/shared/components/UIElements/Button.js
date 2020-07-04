import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <button>{props.children}</button>
    
};

export default NavLinks;