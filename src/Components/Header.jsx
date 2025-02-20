import React from "react";
import LogoBatman from "../assets/batman-logo.jpg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <img id="logo" src={LogoBatman} alt="Logo do Batman" />
      <nav>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/contact">
            <li>Contato</li>
          </a>
          <a href="/photos">
            <li>Fotos</li>
          </a>
          <a href="/coments">
            <li>Comentários</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
