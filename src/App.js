import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import User from './user/pages/users'
import Pokemon from './pokemon/pages/Pokemons'

const App = () => {
  return (
  <Router>

<h1>SEMRPE</h1>
    <Switch>
    <Route path="/" exact>
      <h1> Home</h1>
    </Route>
    <Route path="/user" exact>
      <User />
    </Route>
    <Pokemon path="/pokemon" exact></Pokemon>
    <Redirect to = "/"/>
    
    </Switch>
    <h2>FIM</h2>
  </Router>
  );
}

export default App;
