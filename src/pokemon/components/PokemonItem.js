import React from 'react';
import './PokemonItem.css'
const PokemonItem = props => {
  return (
    <li className="pokemon-item">
      <div className="pokemon-item__content">
        <a href={`pokemon/${props.id}`} className="pokemon-item__anchor">
        <div className="pokemon-item__icon">
          <div className="pokemon-item-icon__container">
          <div 
            className="pokemon-item__icon__img" 
            style={{backgroundImage: "url(pokemon-icons/" + `${props.id}`.padStart(3, 0) + ".png)"}}
            alt = {props.name}/>
          </div>
        </div>
        <div className="pokemon-item__info">
          <h3>#{`${props.id}`.padStart(3,0)} {props.name}</h3>
        </div>
        </a>
      </div>
    </li>
  )
};

export default PokemonItem