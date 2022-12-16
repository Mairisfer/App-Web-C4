import React, { useState } from "react";
import { Link } from "react-router-dom";
import Boton from "../../components/forms/Boton";
import Logo from "../../assets/Logo";
import Input from "../../components/forms/Input";

import "./Login.css";

function Login() {
  async function onSubmit(evento) {
    evento.preventDefault();
    /*alert("Estas iniciando sesión con las siguientes credenciales. User: "+user+", Password: " 
      + password);*/

    const res = await fetch("http://localhost:8089/login", {
      method: "GET",
      mode: "cors",
      headers: {
        username: username,
        password: password,
      },
    });

    if (res.ok) {
      const data = await res.json();
      alert("Usa este token para ingresar:" + data.token);
    } else {
      alert(res.status);
    }
  }

  const [username, setUsername] = useState("");

  function onUsernameChange(e) {
    setUsername(e.target.value);
    //console.log(username);
  }

  const [password, setPassword] = useState("");

  /*
    function onPasswordChange(e) {
      setPassword(e.target.value);      
    }
  */

  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <h1 className="title">Ingresa a tu sitio</h1>
        <p>¡Nos alegra verte de nuevo!</p>
        <h4 className="content">
          Todo puede ser mejor cuando lo ves desde el lugar correcto
        </h4>
        <form className="flex card form">
          <Input type="String" onChange={(e) => onUsernameChange(e)}>
            User Name
          </Input>
          <Input type="password" onChange={(e) => setPassword(e.target.value)}>
            Password
          </Input>

          <Boton style="fill" type="submit">
            Login
          </Boton>
        </form>
        <div className="register card">
          <p>
            ¿Recien llegaste? <Link to="/register">Crea una cuenta</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
