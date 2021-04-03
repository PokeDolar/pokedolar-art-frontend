import React, { useEffect, useState, useContext } from "react";

import { UserContext } from '../../shared/context/user-context'

const Pokemon = () => {

  const userContext = useContext(UserContext);
    return (
    <React.Fragment>
      {userContext.user && (
        <React.Fragment>
          dsnajkdnasjkdsanjkdas
          {userContext.user.twitterDisplayName}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Pokemon;
