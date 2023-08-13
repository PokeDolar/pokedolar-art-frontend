import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import "./NavLinks.css";

const NavLinks = (props) => {
  const user = useContext(UserContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink
          to="/pokemon"
          isActive={(match, location) => {
            if (location.pathname.startsWith("/pokeart")) {
              return true;
            }
            if (!match) {
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
      {user.isLoggedIn && user.user.admin && (
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
      )}

      {!user.isLoggedIn && (
        <li>
          <a href={`${process.env.REACT_APP_API_URL}/login`}>Entrar</a>
        </li>
      )}
      {user.isLoggedIn && (
        <li>
          <a href={`${process.env.REACT_APP_API_URL}/logout`}>Sair</a>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
