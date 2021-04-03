import React from "react";

import TypeIcon from "../pokemon/TypeIcon";
import "./PokeArtDetails.css";
import "../pokemon/Types.css";
import randomRange from "../../../utils/randomRange";
import PokemonItem from "../pokemon/PokemonItem";
const PokemonDetails = (props) => {
  let dolar = props.dolar;
  let chosenArt = props.chosenArt;
  let localData = props.localData;
      let url = `${chosenArt.filePath}`
      return (
    <React.Fragment>
      <div className="pokemon-details__main-art">
        <div
          className={
            "pokemon-details__img-container " +
            localData.type[randomRange(0, localData.type.length)]
          }
        >
          <div className="pokemon-details__main-art__header__text">
            <div className="pokemon-details__main-art__header__text__name">
              {dolar && `O dólar está custando R$ ${dolar}`} {dolar && <br></br>}  {localData.name.english}
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
          <div className="pokemon-anchors">
          <PokemonItem id={localData.id - 1} text={"show"}/>
          <PokemonItem id={localData.id + 1} side={"left"} text={"show"} />
        </div>
          <div
            className={"pokemon-details__img"}
            style={{
              backgroundImage: `url(` + encodeURI(url) + `)`,
            }}
            alt={props.name}
          ><div className="pokemon-anchors-mobile">
          <PokemonItem id={localData.id - 1} text={"show"}/>
          <PokemonItem id={localData.id + 1} side={"left"} text={"show"} />
        </div></div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonDetails;
