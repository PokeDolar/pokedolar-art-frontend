import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";

import PokemonDetails from "../../shared/components/PokeArts/PokeArtDetails";
import PokeArtTable from "../../shared/components/PokeArts/PokeArtTable";
import PokeArtGallery from '../../shared/components/PokeArts/PokeArtGallery'
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import randomRange from "../../utils/randomRange";
import "./MainPage.css";

const POKEMONS = require("../data/pokedex.json");

const Pokemon = () => {
  console.log("hmm");
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPokemon, setLoadedPokemon] = useState();
  const [officialArts, setOfficialArts] = useState();
  const [fanArts, setFanArts] = useState();
  const [chosenArt, setChosenArt] = useState();
  const [pokemon, setPokemon] = useState();
  const [dolar, setDolar] = useState();

  let id = 1
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_API_URL}`
        );

        let all_arts = response.pokemon.officialPokeArts.concat(
          response.pokemon.pokeArts
        );
        id = response.pokemon.id
        setOfficialArts(response.pokemon.officialPokeArts);
        setFanArts(response.pokemon.pokeArts);
        setChosenArt(all_arts[randomRange(0, all_arts.length)]);
        setLoadedPokemon(response.pokemon);
        setPokemon(POKEMONS[id-1]);
        setDolar(response.dolar);
      } catch (err) {}
    };
    fetchPokemon();
  }, [id, sendRequest]);

  let index = id - 1;
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPokemon && pokemon && (
        <React.Fragment>
          <div className="pokemon-main">
            <PokemonDetails
              chosenArt={chosenArt}
              apiData={loadedPokemon}
              localData={pokemon}
              dolar={dolar}
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
