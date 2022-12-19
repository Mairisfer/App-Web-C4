import React, { useContext } from "react";
//import UserContext from "../../contexts/UserContext";

import "./ClientPanel.css";

function Transaction(props) {
  const { data } = props;
  const { idReserv, dateReserv, dateRequest, status } = data;

  return (
    <div className="transaction grid">
      <p className="from">Numero de Reservacion: {idReserv}</p>
      <p className="date">Fecha de Reservacion: {dateReserv}</p>
      <p className="date">Fecha de Solicitud: {dateRequest}</p>
      <p className="date">{status}</p>
    </div>
  );
}

export default Transaction;
