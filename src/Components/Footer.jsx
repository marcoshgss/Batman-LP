import React from "react";
import LogoBatman from "../assets/batman-logo.jpg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <a href="/"><img
        style={{ objectFit: "contain" }}
        src={LogoBatman}
        id="logo"
        alt="logo"
      /></a>
      <span>Todos os direitos reservados &copy;</span>
      <span>Desenvolvido por: Marcos Henrique</span>

      <nav className="footer-navigation">
        <ul className="footer-list">
          <Link to="header" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="coments" smooth={true} duration={500}>
            <li>Comentários</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li>Contato</li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
