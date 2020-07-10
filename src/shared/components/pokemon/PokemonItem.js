import React from "react";
import { Link } from "react-router-dom";

import "./PokemonItem.css";
const POKEMONS = require("../../../pokemon/data/pokedex.json");
const PokemonItem = (props) => {
  let hideClass = "";
  if (!props.id || props.id >= POKEMONS.length) {
    hideClass = " hide_all";
  }
  return (
    <li className={`pokemon-item${hideClass}`}>
      <div className="pokemon-item__content">
        <Link
          key={props.id}
          to={`/pokemon/${props.id}`}
          className="pokemon-item__anchor"
        >
          {props.side && (
            <div className="pokemon-item__info text-right">
              #{`${props.id}`.padStart(3, 0)}
            </div>
          )}
          <div className="pokemon-item__icon">
            <div className="pokemon-item-icon__container">
              <div
                className="pokemon-item__icon__img"
                style={{
                  backgroundImage:
                    "url(/pokemon-icons/" +
                    `${props.id}`.padStart(3, 0) +
                    ".png)",
                }}
                alt={props.name}
              />
            </div>
          </div>
          {(!props.side && props.text) && (
            <div
              className="pokemon-item__info text-left"
              style={{ float: "right" }}
            >
              #{`${props.id}`.padStart(3, 0)}
            </div>
          )}
        </Link>
      </div>
    </li>
  );
};

export default PokemonItem;
