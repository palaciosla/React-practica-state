import React from "react";
import TextButton from "./TextButton";


function TextInput(props) {
  return (
    <form name="form-text" onSubmit={props.handleSubmit} className="form-text">
      <textarea
        name="value"
        id="value"
        cols="30"
        rows="10"
        onChange={props.handleChange}
      ></textarea>
      <TextButton handleSubmit={props.handleSubmit}/>
    </form>
  );
}

export default TextInput;
