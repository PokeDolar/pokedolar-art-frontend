import React from "react";
import "./PokemonList.css";

import PokeItem from "../../shared/components/pokemon/PokemonItem"
const PokemonList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h1>No users found</h1>
      </div>
    );
  }

  return (
    <ul className="pokemon_list">
      {props.items.map((pokemon) => {
        return (
          <PokeItem
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name.english}
          ></PokeItem>
        );
      })}
    </ul>
  );
};

export default PokemonList;
