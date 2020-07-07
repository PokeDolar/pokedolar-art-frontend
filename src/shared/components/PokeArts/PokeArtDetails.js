import React from "react";

import TypeIcon from "../pokemon/TypeIcon";
import "./PokeArtDetails.css";
import "../pokemon/Types.css"

const PokemonDetails = (props) => {
  let chosenArt = props.chosenArt;
  let localData = props.localData;
  console.log(chosenArt);
  console.log(props.apiData);
  
  return (
    <React.Fragment>
      <div className="pokemon-details__main-art">
        <div className="pokemon-details__img-container">
          <div className="pokemon-details__main-art__header__text">
            <div className="pokemon-details__main-art__header__text__name">
              {localData.name.english}
            </div>
            <div className="pokemon-details__main-art__header__text__info">
              <div className="pokemon-details__main-art__header__text__info__number">
                No. {`${localData.id}`.padStart(3)}
              </div>
              <div className="pokemon-details__main-art__header__text__info__types">
                {localData.type.map((typeString) => {
                  return <TypeIcon key={typeString} typeString={typeString} />;
                })}
              </div>
            </div>
          </div>
          <img
            className={"pokemon-details__img " + localData.type[0]}
            src={process.env.REACT_APP_API_URL + chosenArt.filePath}
            // src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg"
            alt={localData.name.english}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonDetails;
