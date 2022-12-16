import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/global.css";
import Navbar from "./components/ui/Navbar";

//import Boton from "./components/forms/Boton";
import Login from "./views/login/Login";
import Home from "./views/home/Home";
import NewClient from "./views/register/NewClient";
import Clients from "./views/Clients";
import ClientPanel from "./views/panel/ClientPanel";

function App() {
  //const [view, setView] = useState(<Home></Home>);
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/Clients" element={<Clients></Clients>}></Route>      
      <Route path="registro" element={<NewClient></NewClient>}></Route>
      <Route path="/client-panel" element={<ClientPanel></ClientPanel>}></Route>
    </Routes>
  );
}

export default App;
