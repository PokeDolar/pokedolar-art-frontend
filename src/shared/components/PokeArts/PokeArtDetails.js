import React from "react";

import TypeIcon from "../pokemon/TypeIcon";
import "./PokeArtDetails.css";

const PokemonDetails = (props) => {
  let chosenArt = props.chosenArt;
  let localData = props.localData;
  console.log(chosenArt);
  console.log(props.apiData);
  return (
    <React.Fragment>
      <div className="pokemon-details__main-art">
        <div className="pokemon-details__main-art__display">
          <div className="pokemon-details__main-art__header">
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
                    return (
                      <TypeIcon key={typeString} typeString={typeString} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="pokemon-details__img-container">
            <img
              className="pokemon-details__img"
              src={process.env.REACT_APP_API_URL + chosenArt.filePath}
              alt={localData.name.english}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonDetails;
