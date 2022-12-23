import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Transaction from "./Transaction";
import "./ClientPanel.css";
import { useNavigate } from "react-router-dom";

function ClientPanel() {
  async function fetchData() {
    const res = await fetch(API_URL + "/ api/login/");
    const documents = await res.json();

    setDocuments(documents);
    console.log(documents);
  }

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="user-panel">
      <div className="container">
        <h2>Reservaciones :</h2>
        <div className="balance card flex">
          <p>Estas son las reservas activas de toda nuestra comunidad</p>
        </div>

        <div className="transactions card">
          {documents.map((document) => (
            <Transaction data={document} key={document._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);

  function cerrarSesion(event) {
    event.preventDefault();
    removeCookie("token");
    navigate("/login");
  }

  return (
    <section className="dashboard">
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </section>
  );
}

function Transaction(props) {
  const { data } = props;
  const { idReserv, dateReserv, dateRequest, status } = data;

  return (
    <div className="transaction grid">
      <p className="from">
        <b>Numero de Reserva:</b> {idReserv}
      </p>
      <p className="date">* Fecha de Reserva: {dateReserv}</p>
      <br></br>
      <p className="date">* Fecha de Solicitud: {dateRequest}</p>
      <p className="date">{status}</p>
    </div>
  );
}

export default ClientPanel;
