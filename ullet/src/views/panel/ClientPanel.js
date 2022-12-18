import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { getTransactions } from "../../services/TransactionService";
import Transaction from "./Transaction";
import "./ClientPanel.css";

function ClientPanel() {
  const { token } = useContext(TokenContext);

  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }

    async function fetchData() {
      const documents = await getTransactions(token);
      setDocuments(documents);
    }

    fetchData();
  }, []);

  return (
    <section className="client-panel">
      <div className="container">
        <div className="balance card flex">
          <h1>Mis Reservas: </h1>
          <p> VIP </p>
        </div>

        <h1>Historial de Reservas</h1>

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
