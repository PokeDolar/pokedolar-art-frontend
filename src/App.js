import React, { useState, useCallback, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNav from "./shared/components/Navigation/MainNavigation";

import Pokemons from "./pokemon/pages/Pokemons";
import MainPage from "./pokemon/pages/MainPage";
import Pokemon from "./pokemon/pages/Pokemon";
import PokeArt from "./pokeart/pages/PokeArt";
import SubmitPokeArt from "./pokeart/pages/SubmitPokeArt";
import User from "./user/pages/userPage";
import Admin from "./admin/pages/Admin";
import ReviewPendingArts from "./admin/pages/ReviewPendingArts";
import { UserContext } from "./shared/context/user-context";
import { useHttpClient } from "./shared/hooks/http-hook";

const App = () => {
  const [user, setUser] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const login = useCallback((user) => {
    setUser(user);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_API_URL}user/`,
          "GET"
        );
        setUser(response);
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest]);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: !!user,
        user: user,
        login: login,
      }}
    >
      <Router>
        <main>
          <MainNav />
        </main>
        <content>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/user" exact>
              <User />
            </Route>
            <Route path="/pokemon" exact>
              <Pokemons />
            </Route>
            <Route path="/pokemon/:id">
              <Pokemon />
            </Route>
            <Route path="/submit">
              <SubmitPokeArt />
            </Route>
            <Route path="/pokeart/:id">
              <PokeArt />
            </Route>
            <Route path="/admin/" exact>
              <Admin />
            </Route>
            <Route path="/admin/pendingarts" exact>
              <ReviewPendingArts />
            </Route>
            <Redirect to="/" />
          </Switch>
        </content>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
