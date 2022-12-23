import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import Boton from "../../components/forms/Boton";
import Input from "../../components/forms/Input";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";
import { login } from "../../services/AuthService.js";
import "./Login.css";

function Login() {
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token", "userName"]);

  const navigate = useNavigate();

  /*useEffect(() => {
    if (cookies.token) return navigate("/");
  }, {});*/

  async function onButtonClick(event) {
    event.preventDefault();
    //console.log(username);
    //console.log(password);
    const token = await login(username, password);

    if (token) {
      setToken(token);
      setCookie("token", token, "/");
      setUser({ name: username });
      setCookie("username", username);
      navigate("/reservations");
    } else {
      alert("Password incorrecto");
    }
  }

  async function comeBackButton(event) {
  event.preventDefault();       
  navigate("/");
  } 
    

  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo showText={false} />
        </Link>
        <h1 className="title">Ingresa a tu sitio</h1>
        <br></br>
        <p>¡Nos alegra verte de nuevo!</p>
        <br></br>
        <h4 className="content">
          Todo puede ser mejor cuando lo ves desde el lugar correcto
        </h4>
        <form className="flex card form">
          <Input onChange={(event) => setUsername(event.target.value)}>
            Username
          </Input>
          <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          >
            Password
          </Input>

          <Boton onClick={onButtonClick} style="fill">
            Login
          </Boton>
        </form>
        <div className="register card">
          <p>
            ¿Recien llegaste?{" "}
            <Link to="/register">
              <b>Crea una cuenta</b>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <Boton onClick={comeBackButton} style="wire">
              Home
            </Boton>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;

/*sync function onSubmit(evento) {
    evento.preventDefault();
    /*alert("Estas iniciando sesión con las siguientes credenciales. User: "+user+", Password: " 
      + password);

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

    function onPasswordChange(e) {
      setPassword(e.target.value);      
    }
  */
