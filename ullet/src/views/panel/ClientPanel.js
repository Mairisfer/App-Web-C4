import React, { useContext, useEffect, useState } from "react";
//import { useCookies } from "react-cookie";
import Transaction from "./Transaction";
import "./ClientPanel.css";

function ClientPanel() {
  async function fetchData() {
    const res = await fetch("http://localhost:8089/api/reservations");
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
          <p>
            Estas son las reservas activas de toda nuestra comunidad
          </p>
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
