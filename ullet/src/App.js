import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./assets/global.css";
import Nav from "./components/Nav";
import Gap from "./components/utils/Gap";
//import Boton from "./components/forms/Boton";
import Login from "./views/Login";
import Home from "./views/Home";
import NewClient from "./views/NewClient";
import Clients from "./views/Clients";
import Client from "./views/Client";


function App() {
  //const [view, setView] = useState(<Home></Home>);
  return (
    <div>
      <Nav>
        <Link to="/">Home</Link>
        <Gap>1rem</Gap>
        <Link to="/login">Login</Link>
        <Gap>1rem</Gap>
        <Link to="/clients">Clients</Link>
        <Gap>1rem</Gap>
        <Link to="/clients/new">Nuevo Cliente</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/clients">
          <Route index element={<Clients></Clients>}></Route>
          <Route path=":username" element={<Client></Client>}></Route>
          <Route path="new" element={<NewClient></NewClient>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
