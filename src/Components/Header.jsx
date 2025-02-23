import React from "react";
import LogoBatman from "../assets/batman-logo.jpg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <img id="logo" src={LogoBatman} alt="Logo do Batman" />
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li>Contato</li>
          </Link>
          <Link href="/photos">
            <li>Fotos</li>
          </Link>
          <Link href="/coments">
            <li>Comentários</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
