import React, { useEffect, useState, useContext } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import { UserContext } from "../../shared/context/user-context";
import { Redirect } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button"
import PokeArtTable from "../../shared/components/PokeArts/PokeArtTable"

const AdminReviewArts = () => {
  const userContext = useContext(UserContext);
  const [pendingArts, setPendingArts] = useState(false);
  const [currentArt, setCurrentArt] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_API_URL}pokeart/pending`,
          "GET",);
        setPendingArts(response);

        {console.log(typeof(response[0]))}
        setCurrentArt(response[0]);
      } catch (err) {}
    };
    fetchArts();
  }, [sendRequest]);
  const removeFirstElem = () => {
    console.log(pendingArts);
    if(pendingArts){
      pendingArts.shift()
      setPendingArts(pendingArts);
      setCurrentArt(pendingArts[0]);
    }
  }
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {/* <Redirect to="/"/> */}

      {!isLoading && currentArt && (
        <React.Fragment>
          <img src={`${process.env.REACT_APP_API_URL}${currentArt.filePath}`}/>
          
          <PokeArtTable chosenArt={currentArt} />
          <Button onClick={removeFirstElem} >REMOVER</Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AdminReviewArts;
