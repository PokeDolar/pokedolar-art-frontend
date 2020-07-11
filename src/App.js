import React, { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNav from "./shared/components/Navigation/MainNavigation"

import Pokemons from "./pokemon/pages/Pokemons";
import Pokemon from "./pokemon/pages/Pokemon";
import PokeArt from './pokeart/pages/PokeArt'
import SubmitPokeArt from './pokeart/pages/SubmitPokeArt'
import User from "./user/pages/userPage";
import { UserContext } from './shared/context/user-context';
import { useHttpClient } from "./shared/hooks/http-hook";

const App = () => {
  const [user, setUser] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const login = useCallback((user) => {
    setUser(user);
  }, []);

  useEffect(() => {
    
  })
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}user/`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });
        const responseData = await response.json();
        setUser(responseData);
      } catch (err) {
      }
    };
    sendRequest();
  }, [sendRequest]);

  return (
    <UserContext.Provider
    value={{
        isLoggedIn: !!user,
        user: user,
        login: login
    }}>
    <Router>
      <main><MainNav/></main>
      <content>
      <Switch>
        <Route path="/" exact>
          <h1> Home</h1>
        </Route>
        <Route path="/user" exact>
          <User />
        </Route>
        <Route path="/pokemon" exact>
          <Pokemons />
        </Route >
        <Route path="/pokemon/:id">
          <Pokemon />
        </Route>
        <Route path="/submit">
          <SubmitPokeArt />
        </Route>
        <Route path="/pokeart/:id">
          <PokeArt />
        </Route>
        <Redirect to="/" />
      </Switch>
      </content>
    </Router>
    </UserContext.Provider>
  );
};

export default App;
