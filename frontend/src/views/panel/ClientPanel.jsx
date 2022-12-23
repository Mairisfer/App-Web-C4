import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Transaction from "./Transaction";
import "./ClientPanel.css";
import { useNavigate } from "react-router-dom";
import { getTransactions } from "../../services/TransactionService";
import TokenContext from "../../contexts/TokenContext";
import Boton from "../../components/forms/Boton";

function ClientPanel() {
  const { token } = useContext(TokenContext);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const currentToken = token ? token : cookies.token;

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    getTransactions(currentToken).then((documents) => setDocuments(documents));
  }, []);

  function cerrarSesion(event) {
    event.preventDefault();
    removeCookie("token");
    navigate("/login");
  }

  return (
    <section className="user-panel">
      <div className="container">
        <Boton style="fill" onClick={cerrarSesion}>
          Cerrar Sesión
        </Boton>
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

export default ClientPanel;
