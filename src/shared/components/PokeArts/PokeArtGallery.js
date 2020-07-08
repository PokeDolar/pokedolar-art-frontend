import React from "react";
import { Link } from "react-router-dom";

import "./PokeArtGallery.css";
import "../pokemon/Types.css";
const PokeArtGallery = (props) => {
  let artList = props.artList;
  let galleryName = props.galleryName;
  const types = props.types;
  return (
    <React.Fragment>
      <div className="pokeartgallery-container">
        <h2>{galleryName}</h2>
        <div className="pokeart-gallery">
          {artList.map((art, index) => {
            return (
              <Link
                key={art._id}
                to={`/pokeart/${art._id}`}
                className="pokeart-gallery-anchor"
              >
                <img
                  className={`pokeart-gallery-img ${
                    types[index % types.length]
                  }`}
                  src={process.env.REACT_APP_API_URL + art.filePath}
                  alt={art.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokeArtGallery;
