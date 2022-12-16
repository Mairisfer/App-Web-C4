import React from "react";
import Boton from "../../components/forms/Boton";
import GridColum from "../../components/GridColumn";
import girl from "./girl.png";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="grid container">
        <GridColum className="headline">
          <h2 className="title">Tu Palco...</h2>
          <h1 className="content">El mejor lugar para ti</h1>
          <p className="supporting">
            Porque siempre importa desde donde ves tus mejores momentos{" "}
            <b>Tu Eliges!</b>
          </p>
          <Boton style="fill">Quiero el mejor lugar</Boton>
        </GridColum>
        <GridColum className="girl">
          <img src={girl}></img>
        </GridColum>
      </div>
    </section>
  );
}

export default Home;
