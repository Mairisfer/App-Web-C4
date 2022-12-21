import React from "react";

import "./BoxesPanel.css";

function ShowPalcos(props) {
  const { data } = props;
  const { idBox, capacity, description, location, category } = data;

  return (
    <div className="transaction grid">
      <h3 className="from">
        <b>Id Palco : </b>
        {idBox}
      </h3>
      <div>
        <p className="date">
          <b>Capacidad : </b>
          {capacity}
        </p>
        <p className="date">
          <b>Descripción : </b>
          {description}
        </p>
        <p className="date">
          <b>Locación : </b>
          {location}
        </p>
        <p className="date">
          <b>Categoria : </b>
          {category}
        </p>
      </div>
    </div>
  );
}

export default ShowPalcos;
