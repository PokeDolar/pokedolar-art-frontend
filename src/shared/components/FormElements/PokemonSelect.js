import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import "./Input.css";
import PokemonItem from '../pokemon/PokemonItem'

const POKEMON = require("../../../pokemon/data/pokedex.json");

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const PokemonSelect = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    console.log(event);
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element = (
    <React.Fragment>
    <PokemonItem id={value || 0}/>
    <select 
    onChange={changeHandler}
    onBlur={touchHandler}>
      <option value="">Selecione o Pokemon</option>

      {POKEMON.map((pokemon) => {
        return (
          <option value={pokemon.id}>
             {pokemon.name.english} #{`${pokemon.id}`.padStart(3, 0)}
          </option>
        );
      })}
    </select>
    </React.Fragment>
  );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default PokemonSelect;
