import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";


import { UserContext } from "../../shared/context/user-context";
import Button from "../../shared/components/FormElements/Button"

const Pokemon = () => {
  const userContext = useContext(UserContext);
  
  return (
    <React.Fragment>
      
      {userContext.user && (
        <React.Fragment>
          {!userContext.user.admin && <Redirect to = "/"/>}
          <Button href="admin/pendingarts">Ver artes pendentes</Button>
          {userContext.user.twitterUsername}
          {userContext.user.admin}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Pokemon;
