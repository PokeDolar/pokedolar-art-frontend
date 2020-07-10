import React from "react";
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

import User from "./user/pages/userPage";

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
        <Route path="/pokemon" exact>
          <Pokemons />
        </Route >
        <Route path="/pokemon/:id">
          <Pokemon />
        </Route>
        <Route path="/pokeart/:id">
          <PokeArt />
        </Route>
        <Redirect to="/" />
      </Switch>
      </content>
    </Router>
  );
};

export default App;
