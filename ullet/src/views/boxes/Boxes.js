import React, { useContext, useEffect, useState } from "react";

import ShowPalcos from "./ShowPalcos";
import "./BoxesPanel.css";

function BoxesPanel() {
  async function fetchData() {
    const res = await fetch("http://localhost:8089/api/boxes/");
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
        <div className="balance card flex">
          <h1>Palcos:</h1>
          <p>Bienvenido</p>
        </div>

        <div className="transactions card">
          {documents.map((document) => (
            <ShowPalcos data={document} key={document._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default BoxesPanel;
