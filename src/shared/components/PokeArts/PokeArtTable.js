import React from "react";

import "./PokeArtTable.css";

const PokeArtTable = (props) => {
  let chosenArt = props.chosenArt;
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
          <td>{chosenArt.creatorText || chosenArt.author}</td>
        </tr>
        <tr>
          <th>Quantidade de Posts</th>
          <td>{chosenArt.postCount || "0"}</td>
        </tr>
        <tr>
          <th>Último Post</th>
          <td>{chosenArt.lastCount || "Não foi postada"}</td>
        </tr>
        </tbody>
      </table>
      </div>
    </React.Fragment>
  );
};

export default PokeArtTable;
