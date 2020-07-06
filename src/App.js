import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNav from "./shared/components/Navigation/MainNavigation"
import User from "./user/pages/users";
import Pokemons from "./pokemon/pages/Pokemons";
import Pokemon from "./pokemon/pages/Pokemon";

const App = () => {
  return (
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
        <Router path="/pokemon" exact>
          <Pokemons />
        </Router>
        <Route path="/pokemon/:id">
          <Pokemon />
        </Route>
        <Redirect to="/" />
      </Switch>
      </content>
    </Router>
  );
};

export default App;
