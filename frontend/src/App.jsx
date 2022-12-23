import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/global.css";
import Navbar from "./components/ui/Navbar";
import NavbarLog from "./components/ui/NavbarLog";
import { TokenProvider } from "./contexts/TokenContext";
import { UserProvider } from "./contexts/UserContext";
import { CookiesProvider } from "react-cookie";

import Home from "./views/home/Home";
import Login from "./views/login/Login";
import NewClient from "./views/register/NewClient";
import ClientPanel from "./views/panel/ClientPanel";
import BoxesPanel from "./views/boxes/Boxes";
import Transaction from "./views/panel/Transaction";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1 className="container">About</h1>} />
      </Route>

      <Route
        path="/login"
        element={
          <CookiesProvider>
            <TokenProvider>
              <UserProvider>
                <Login />
              </UserProvider>
            </TokenProvider>
          </CookiesProvider>
        }
      />

      <Route element={<NavbarLog />}>
        <Route
          path="/reservations"
          element={
            <TokenProvider>
              <UserProvider>
                <Transaction />
              </UserProvider>
            </TokenProvider>
          }
        />
      </Route>
      <Route element={<NavbarLog />}>
        <Route
          path="/boxes"
          element={
            <CookiesProvider>
              <TokenProvider>
                <UserProvider>
                  <BoxesPanel />
                </UserProvider>
              </TokenProvider>
            </CookiesProvider>
          }
        />
      </Route>
      <Route
        path="/clients"
        element={
          <CookiesProvider>
            <TokenProvider>
              <UserProvider>
                <ClientPanel />
              </UserProvider>
            </TokenProvider>
          </CookiesProvider>
        }
      />
      <Route
        path="/register"
        element={
          <CookiesProvider>
            <TokenProvider>
              <UserProvider>
                <NewClient />
              </UserProvider>
            </TokenProvider>
          </CookiesProvider>
        }
      />
    </Routes>
  );
}
export default App;
