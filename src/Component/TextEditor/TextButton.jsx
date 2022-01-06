import React from "react";
import { actions } from "./helpers/actions.js";

function TextButton(props) {
  // let botones = actions.map(accion => <button onClick={props.handleSubmit} id={accion.id} key={new Date()}>{accion.id}</button>)
  return (
    <div className="grid-button">
      {actions.map((accion) => (
        <button onClick={props.handleSubmit} id={accion.id} key={accion.id}>
          {accion.id}
        </button>
      ))}
    </div>
  );
}

export default TextButton;
