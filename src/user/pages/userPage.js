import React, { useEffect, useState, useContext } from "react";

import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import { UserContext } from '../../shared/context/user-context'

const Pokemon = () => {

  const userContext = useContext(UserContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [user, setUser] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}user/`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });
        const responseData = await response.json();
        userContext.login(responseData);
        setUser(responseData);
      } catch (err) {
      }
    };
    sendRequest();
  }, [sendRequest]);

  
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && user && (
        <React.Fragment>
          {user.twitterDisplayName}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Pokemon;
