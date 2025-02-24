import React from "react";
import LogoBatman from "../assets/batman-logo.jpg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <img id="logo" src={LogoBatman} alt="Logo do Batman" />
      <nav>
        <ul>
          <Link href="/"smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li>Contato</li>
          </Link>
          <Link to="photos" smooth={true} duration={500}>
            <li>Fotos</li>
          </Link>
          <Link to="coments" smooth={true} duration={500}>
            <li>Comentários</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
