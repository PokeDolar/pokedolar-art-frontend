import React from 'react';
import PokemonList from '../components/PokemonList'
const POKEMONS = require('../data/pokedex.json')

const Pokemons = () => {
  
  return <PokemonList items={POKEMONS}/>;
}

export default Pokemons