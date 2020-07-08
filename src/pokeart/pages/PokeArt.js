import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";

import PokemonDetails from "../../shared/components/PokeArts/PokeArtDetails";
import PokeArtTable from "../../shared/components/PokeArts/PokeArtTable";
import PokeArtGallery from '../../shared/components/PokeArts/PokeArtGallery'
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import randomRange from "../../utils/randomRange";
import "./PokeArt.css";

const POKEMONS = require("../../pokemon/data/pokedex.json");

const Pokemon = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPokemon, setLoadedPokemon] = useState();
  const [officialArts, setOfficialArts] = useState();
  const [fanArts, setFanArts] = useState();
  const [chosenArt, setChosenArt] = useState();
  const [pokemon, setPokemon] = useState()
  const { id } = useParams();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}pokeart/${id}`
        );
        const responseData = await response.json();
        console.log(responseData);
        
        let pokemon_id = responseData.pokemon.id
        const responsePoke = await fetch(`${process.env.REACT_APP_API_URL}pokemon/${pokemon_id}`);
        const responseDataPoke = await responsePoke.json();
        console.log(responseDataPoke);
        setPokemon(POKEMONS[pokemon_id-1])
        setChosenArt(responseData);
        setOfficialArts(responseDataPoke.officialPokeArts);
        setFanArts(responseDataPoke.pokeArts);
        setLoadedPokemon(responseDataPoke);
      } catch (err) {}
    };
    sendRequest();
  }, [id, sendRequest]);


  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPokemon && (
        <React.Fragment>
          <div className="pokemon-main">
            <PokemonDetails
              chosenArt={chosenArt}
              apiData={loadedPokemon}
              localData={pokemon}
            />
            <div className="pokemon-side">
              <PokeArtTable chosenArt={chosenArt} />
              {officialArts && <PokeArtGallery artList={officialArts} types={pokemon.type} galleryName={"Artes Oficiais"}/>}
              {fanArts.length > 0 && <PokeArtGallery artList={fanArts} types={pokemon.type}  galleryName={"Artes dos Fãs"}/>}
            </div>
            
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Pokemon;
