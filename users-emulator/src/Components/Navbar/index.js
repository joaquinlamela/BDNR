import React from "react";
import { Link } from "react-router-dom";
import Header from "./styles/Header";
import Nav from "./styles/Nav";

const Navbar = () => {
  return (
    <Header>
      <Link to="/"> Zulahe </Link>

      <Nav>
        <Link to="/"> Crear usuario </Link>
        <Link to="/view-profile"> Ver perfil </Link>
        <Link to="/list-users"> Listar usuarios </Link>
      </Nav>
    </Header>
  );
};

Navbar.propTypes = {};

export default Navbar;
