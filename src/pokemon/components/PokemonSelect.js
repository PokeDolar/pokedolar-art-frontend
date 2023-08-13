import React, { useReducer, useEffect } from "react";
import "./select.css";
import { useHistory } from "react-router-dom";
import PokemonItem from "../../shared/components/pokemon/PokemonItem";
const POKEMON = require("../../pokemon/data/pokedex.json");

const PokemonSelect = (props) => {
  const { id } = props;
  const { min, max } = props;
  const history = useHistory();
  let list_pokemon = POKEMON.slice(min, max);

  const changeHandler = (event) => {
    let pokeid = document.querySelector(`#${id}`).value;
    history.push(`/pokemon/${pokeid}`);
  };

  const element = (
    <div className="selector">
      <select id={id} onChange={changeHandler}>
        {list_pokemon.map((pokemon) => {
          return (
            <option key={pokemon.id} value={pokemon.id}>
              {pokemon.name.english} #{`${pokemon.id}`.padStart(3, 0)}
            </option>
          );
        })}
      </select>
    </div>
  );

  return <React.Fragment>{element}</React.Fragment>;
};

export default PokemonSelect;
