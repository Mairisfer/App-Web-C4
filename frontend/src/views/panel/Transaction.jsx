import React from "react";

import "./ClientPanel.css";

function Transaction(props) {
  const { data } = props;
  const { idReserv, dateReserv, dateRequest, status } = data;

  return (
    <div className="transaction grid">
      <p className="from">
        <b>Numero de Reserva:</b> {idReserv}
      </p>
      <p className="date">*  Fecha de Reserva: {dateReserv}</p>
      <br></br>
      <p className="date">*  Fecha de Solicitud: {dateRequest}</p>
      <p className="date">{status}</p>
    </div>
  );
}

export default Transaction;
