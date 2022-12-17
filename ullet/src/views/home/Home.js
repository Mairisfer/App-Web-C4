import React from "react";
import Boton from "../../components/forms/Boton";
import "./Home.css";
import girl from "../../assets/girl.png";
import GridColum from "../../components/GridColumn";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="grid container">
        <GridColum className="headline">
          <h2 className="title">Trabajamos por encontrar...</h2>
          <br></br>
          <h1 className="content">El mejor lugar para ti!</h1>
          <p className="supporting">
            Porque siempre importa desde donde ves tus mejores momentos{" "}
            <b>Tu Eliges!</b>
          </p>
          <Link to="/register">
            {" "}
            <Boton style="fill">Quiero el mejor lugar</Boton>
          </Link>
        </GridColum>
        <GridColum className="girl">
          <img src={girl}></img>
        </GridColum>
      </div>
    </section>
  );
}

export default Home;
