import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { getReservations, } from "../../services/ReservationsService";
import "./ClientPanel.css";
import Reservation from "./Reservations";

function ClientPanel() {
  const { token } = useContext(TokenContext);

  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }

    async function fetchData() {
      const documents = await getReservations(token);
      setDocuments(documents);
    }

    fetchData();
  }, []);

  return (
    <section className="client-panel">
      <div className="container">
        <div className="Estado de mi reserva">
          <h1>Mis Reservas: </h1>
          <p> VIP </p>
        </div>

        <h1>Historial de Reservas</h1>

        <div className="Historico de reservas">
          {documents.map((document) => (
            <Reservation data={document} key={document._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default ClientPanel;
