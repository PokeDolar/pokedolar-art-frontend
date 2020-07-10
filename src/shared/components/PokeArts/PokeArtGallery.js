import React from "react";
import { Link } from "react-router-dom";
import "./PokeArtGallery.css";
import "../pokemon/Types.css";
const PokeArtGallery = (props) => {
  let artList = props.artList;
  let galleryName = props.galleryName;
  const types = props.types;
  let usedArt = artList
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.min(2, artList.length));
  return (
    <React.Fragment>
      <div className="pokeartgallery-container">
        <div className="pokeart-gallery">
          <div className="gallery-name">{galleryName}</div>
          <div className="gallery-items">
            {usedArt.map((art, index) => {
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
                    effect="opacity"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokeArtGallery;
