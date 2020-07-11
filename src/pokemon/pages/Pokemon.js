import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";

import PokemonDetails from "../../shared/components/PokeArts/PokeArtDetails";
import PokeArtTable from "../../shared/components/PokeArts/PokeArtTable";
import PokeArtGallery from '../../shared/components/PokeArts/PokeArtGallery'
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import randomRange from "../../utils/randomRange";
import "./Pokemon.css";

const POKEMONS = require("../data/pokedex.json");

const Pokemon = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPokemon, setLoadedPokemon] = useState();
  const [officialArts, setOfficialArts] = useState();
  const [fanArts, setFanArts] = useState();
  const [chosenArt, setChosenArt] = useState();

  const { id } = useParams();
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_API_URL}pokemon/${id}`
        );

        let all_arts = response.officialPokeArts.concat(
          response.pokeArts
        );
        setOfficialArts(response.officialPokeArts);
        setFanArts(response.pokeArts);
        setChosenArt(all_arts[randomRange(0, all_arts.length)]);
        setLoadedPokemon(response);
      } catch (err) {}
    };
    fetchPokemon();
  }, [id, sendRequest]);

  let index = id - 1;
  const pokemon = POKEMONS[index];
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
              {console.log(typeof(chosenArt))}
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
