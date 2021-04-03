import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import PokemonSelect from "../../shared/components/FormElements/PokemonSelect";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./SubmitPokeArt.css";
import { UserContext } from "../../shared/context/user-context";

const SubmitPokeArt = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      artName: {
        value: "",
        isValid: false,
      },
      pokemon: {
        value: null,
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const artSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
            formData.append("pokemon", formState.inputs.pokemon.value);
      formData.append("image", formState.inputs.image.value);
      formData.append("artName", formState.inputs.artName.value);
            await sendRequest(
        `${process.env.REACT_APP_API_URL}pokeart/`,
        "POST",
        formData,

        {
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true,
        },

        "include"
      );
      history.push("/");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="pokeart-form" onSubmit={artSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="art-div">
          <ImageUpload
            id="image"
            onInput={inputHandler}
            errorText="Please provide an image."
          />
        </div>
        <div className="data-div">
          <Input
            id="artName"
            element="input"
            type="text"
            label="Título"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
          />
          <PokemonSelect
            id="pokemon"
            type="select"
            label="Pokemon"
            onInput={inputHandler}
            errorText="Please enter a valid title."
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Enviar
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SubmitPokeArt;
