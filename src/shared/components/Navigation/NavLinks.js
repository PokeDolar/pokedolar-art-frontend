import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import "./NavLinks.css";

const NavLinks = (props) => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <ul className="nav-links">
      <li>
        <NavLink
          to="/pokemon"
          isActive={(match, location) => {
            console.log(match);
            console.log(location);
            if(location.pathname.startsWith("/pokeart")){
              return true;
            }
            if (!match) {
              console.log(match);
              return false;
            }
            return true;
            
          }}
        >
          ArtDex
        </NavLink>
      </li>

      {user.isLoggedIn && (
        <li>
          <NavLink to="/submit" exact>
            Enviar
          </NavLink>
        </li>
      )}
      {user.isLoggedIn && (
        <li>
          <NavLink to="/users">Minhas Artes</NavLink>
        </li>
      )}

      {!user.isLoggedIn && (
        <li>
          <a href="http://192.168.15.57:5555/login">Login</a>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
