import React from "react";
import "./forms.css";

function Input(props) {
  const { children, type } = props;

    return (
        <input className="input" type={type}></input>
    );
}
export default Input;