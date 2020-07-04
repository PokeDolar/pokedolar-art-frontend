import React from "react";
import "./PokemonDetails.css";
import PokeItem from "../../shared/components/pokemon/PokemonItem"
const randomRange = require('../../utils/randomRange')

const PokemonDetails = (props) => {
  console.log(props);
  let api_data = props.api_data;
  let local_data = props.local_data;
  let all_arts = props.api_data.officialPokeArts.concat(props.api_data.pokeArts)
  let chosen_art = all_arts[randomRange(0, all_arts.length)]
  console.log(chosen_art);
  return (
    <div className="pokemon_details">
          <PokeItem
            key={local_data.id}
            id={local_data.id}
            name={local_data.name.english}
          ></PokeItem>
          <img class="pokemon_details-img" src={"http://develop:5555/" + chosen_art.filePath}/>
    </div>
  );
};

export default PokemonDetails;
