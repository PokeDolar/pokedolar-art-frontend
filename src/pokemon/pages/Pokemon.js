import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useHttpClient } from '../../shared/hooks/http-hook';

import PokemonDetails from '../components/PokemonDetails'
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const POKEMONS = require("../data/pokedex.json");

const Pokemon = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPokemon, setLoadedPokemon] = useState();
  const { id } = useParams();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(`http://develop:5555/pokemon/${id}`);
        const responseData = await response.json();
        setLoadedPokemon(responseData);
      } catch (err) {}
    };
    sendRequest();
  }, [sendRequest]);

  let index = id - 1;
  const pokemon = POKEMONS[index];

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError}/>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPokemon && <PokemonDetails api_data={loadedPokemon} local_data={pokemon}/>}
    </React.Fragment>
  )
};

export default Pokemon;
