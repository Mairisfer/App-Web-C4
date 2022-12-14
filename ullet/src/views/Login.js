import React, { useState } from "react";
import Boton from "../components/forms/Boton";
import Input from "../components/forms/Input";
import Flex from "../components/utils/Flex";
import Gap from "../components/utils/Gap";

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
    <form onSubmit={(evento) => onSubmit(evento)}>
      <Flex padding="4rem" borderRadius="1rem">
        <h1>TuPalco</h1>
        <Gap direction="vertical">2rem</Gap>
        <h4>Todo puede ser mejor cuando lo ves desde el lugar correcto</h4>
        <Gap direction="vertical">2rem</Gap>
        <Input onChange={(e) => onUsernameChange(e)}>User Name</Input>
        <Gap direction="vertical">0.5rem</Gap>
        <Input type="password" onChange={(e) => setPassword(e.target.value)}>
          Password
        </Input>
        <Gap direction="vertical">3rem</Gap>
        <Boton type="submit">Login</Boton>
      </Flex>
    </form>
  );
}

export default Login;
