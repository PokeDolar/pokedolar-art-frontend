import React from "react";
import "./TypeIcon.css";

const TypeIcon = (props) => {
  let typeName = props.typeString;
    return (
        <img className="type_icon"
          src={"/type-icons/" + `${typeName}`.toLowerCase() + ".png"}
          alt={props.name}
        />
  );
};

export default TypeIcon;
