import React, { useEffect, useState, useContext } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import { UserContext } from "../../shared/context/user-context";
import { Redirect } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import PokemonDetails from "../../shared/components/PokeArts/PokeArtDetails";
import PokeArtTable from "../../shared/components/PokeArts/PokeArtTable";

import "./ReviewPendingArts.css";
import PokeArtGallery from "../../shared/components/PokeArts/PokeArtGallery";

const POKEMONS = require("../../pokemon/data/pokedex.json");
const AdminReviewArts = () => {
  const userContext = useContext(UserContext);
  const [pendingArts, setPendingArts] = useState(false);
  const [currentArt, setCurrentArt] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_API_URL}pokeart/pending`,
          "GET"
        );
        setPendingArts(response);
        setCurrentArt(response[0]);
        setCurrentPokemon(POKEMONS[response[0].pokemon.id - 1]);
      } catch (err) {}
    };
    fetchArts();
  }, [sendRequest]);
  const removeFirstElem = () => {
    console.log(pendingArts);
    if (pendingArts) {
      pendingArts.shift();
      setPendingArts(pendingArts);
      if (pendingArts.length) {
        setCurrentArt(pendingArts[0]);
        setCurrentPokemon(POKEMONS[pendingArts[0].pokemon.id - 1]);
      }
    }
  };

  const changeApprovalRequest = async (art, status) => {
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_API_URL}pokeart/changeapproval?id=${art._id}&status=${status}`,
        "PATCH"
      );
    } catch (e) {
      console.log(e);
    }
  };
  const acceptCurrentArt = () => {
    try {
      changeApprovalRequest(currentArt, "true");
      removeFirstElem();
    } catch (e) {
      console.log(e);
    }
  };
  const denyCurrentArt = () => {
    try {
      changeApprovalRequest(currentArt, "false");
      removeFirstElem();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {/* <Redirect to="/"/> */}

      {!isLoading && pendingArts.length != 0 && currentArt && currentPokemon && (
        <React.Fragment>
          <div className="review-art">
            <div className="pending-art-main">
              <PokemonDetails
                chosenArt={currentArt}
                localData={currentPokemon}
              />
            </div>
            <div className="side-panel">
              <PokeArtTable chosenArt={currentArt} />
              <div className="action-panel">
                <div className="action-title">Actions</div>
                <div className="action-container">
                  <Button onClick={acceptCurrentArt}>ADICIONAR</Button>
                  <Button onClick={denyCurrentArt}>REMOVER</Button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      {!isLoading && pendingArts.length == 0 && (
        <React.Fragment>
          <div className="no-pending-arts">
          Nenhuma arte pendente.
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AdminReviewArts;
