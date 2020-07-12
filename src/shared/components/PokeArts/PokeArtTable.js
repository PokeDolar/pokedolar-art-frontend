import React from "react";

import "./PokeArtTable.css";

const PokeArtTable = (props) => {
  let chosenArt = props.chosenArt;
  console.log(chosenArt);
  return (
    <React.Fragment>
      <div className="table-container">
      <table>
        <tbody>
      <tr>
          <th>Tipo da Arte</th>
          <td>
            {(chosenArt.creatorText && "Arte Oficial") || (chosenArt.author &&  "Arte de fã") }
          </td>
        </tr>
        <tr>
          <th>Artista</th>
          <td>{chosenArt.creatorText || (<a href={`https://twitter.com/i/user/${chosenArt.author.twitterId}`}>{chosenArt.author.twitterDisplayName}</a>)}</td>
        </tr>
        <tr>
          <th>Quantidade de Tweets</th>
          <td>{chosenArt.postCount || "0"}</td>
        </tr>
        <tr>
          <th>Último Tweet</th>
          <td>{chosenArt.lastCount || "Não foi twittada"}</td>
        </tr>
        </tbody>
      </table>
      </div>
    </React.Fragment>
  );
};

export default PokeArtTable;
