import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/global.css";
import Navbar from "./components/ui/Navbar";
import { TokenProvider } from "./contexts/TokenContext";
import { UserProvider } from "./contexts/UserContext";
//import Boton from "./components/forms/Boton";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import NewClient from "./views/register/NewClient";
import ClientPanel from "./views/panel/ClientPanel";

//import ClientPanel from "./views/panel/ClientPanel";

function App() {
  //const [view, setView] = useState(<Home></Home>);
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route
        path="/login"
        element={
          <TokenProvider>
            <UserProvider>
              <Login />
            </UserProvider>
          </TokenProvider>
        }
      ></Route>
      <Route
        path="/clients"
        element={
          <TokenProvider>
            <UserProvider>
              <ClientPanel />
            </UserProvider>
          </TokenProvider>
        }
      />
      <Route
        path="/registro"
        element={
          <TokenProvider>
            <UserProvider>
              <NewClient />
            </UserProvider>
          </TokenProvider>
        }
      />
    </Routes>
  );
}
export default App;
