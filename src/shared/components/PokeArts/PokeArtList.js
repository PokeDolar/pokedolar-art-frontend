import React from "react";

const PokemonDetails = (props) => {
  const artList = props.artList;
  return (
    <React.Fragment>
      <div className="pokeartlist">
        {artList.map((art) => {
          return <img src={art.filePath} alt={art.name} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default PokemonDetails;
