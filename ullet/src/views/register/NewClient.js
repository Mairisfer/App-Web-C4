import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import Boton from "../../components/forms/Boton.js";
import Input from "../../components/forms/Input";

import "./NewClient.css";

function Login() {
  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo showText={false} />
        </Link>
        <h1 className="title">
          Registrate en <b>TuPalco</b>
        </h1>
        <form className="flex card form">
          <Input>Nombre</Input>
          <Input>UserName</Input>
          <Input type="password">Contraseña</Input>
          <Input type="password">Confirmar Contraseña</Input>
          <Input>Email</Input>
          <Input>Edad</Input>
          <Boton style="fill">Registrarme</Boton>
        </form>
        <div className="register card">
          <p>
            ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
