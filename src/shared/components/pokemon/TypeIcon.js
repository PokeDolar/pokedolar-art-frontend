import React from "react";
import "./TypeIcon.css";

const TypeIcon = (props) => {
  let typeName = props.typeString;
  console.log(typeName);
  return (
        // <div
        //   className="type_icon-img"
        //   style={{
        //     backgroundImage:
        //       "url(/type-icons/" + `${typeName}`.toLowerCase() + ".png)",
        //   }}
        //   alt={props.name}
        // />
        <img className="type_icon-img_2"
          src={"/type-icons/" + `${typeName}`.toLowerCase() + ".png"}
          alt={props.name}
        />
  );
};

export default TypeIcon;
