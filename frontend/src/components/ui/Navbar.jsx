import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/Logo";
import Boton from "../forms/Boton";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="menu flex container">
          <li>
            <Link to="/">
              <Logo size="55px" showText={true} />
            </Link>
          </li>
          
          
          <li>
            <Link to="/login">
              <Boton style="wire">Ingresar</Boton>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
