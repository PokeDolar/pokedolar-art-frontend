import React from 'react';
import PokemonList from '../components/PokemonList'
import PokemonSelect from '../components/PokemonSelect'
const POKEMONS = require('../data/pokedex.json')


const Pokemons = () => {
  return <React.Fragment> 
        <div class="pokemon-main">
          <PokemonSelect id="gen1" min={0} max={151}/>
          <PokemonSelect id="gen2" min={151} max={251}/>
          <PokemonSelect id="gen3" min={251} max={386}/>
          <PokemonSelect id="gen4" min={386} max={493}/>
          <PokemonSelect id="gen5" min={493} max={649}/>
          <PokemonSelect id="gen6" min={649} max={721}/>
          <PokemonSelect id="gen7" min={721} max={809}/>
          <PokemonSelect id="gen8" min={809} max={898}/>
          </div>
    </React.Fragment>
}

export default Pokemons