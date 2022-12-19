import React from "react";

import "./BoxesPanel.css";

function ShowPalcos(props) {
  const { data } = props;
  const { idBox, capacity, description, location, category } = data;

  return (
    <div className="transaction grid">
      <p className="from">Id Palco : {idBox}</p>
      <p className="date">Capacidad : {capacity}</p>
      <p className="date">Descripción : {description}</p>
      <p className="date">Locación : {location}</p>
      <p className="date">Categoria : {category}</p>
    </div>
  );
}

export default ShowPalcos;
