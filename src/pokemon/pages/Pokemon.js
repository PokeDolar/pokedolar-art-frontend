import React from 'react';
import { useParams } from 'react-router-dom'
const POKEMONS = require('../data/pokedex.json')

const Pokemon = () => {
  let { id } = useParams();
  let index = id - 1;
  let pokemon = POKEMONS[index];
  return (<h1>{pokemon.name.english}</h1>);
}

export default Pokemon