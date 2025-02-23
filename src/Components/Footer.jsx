import React from "react";
import LogoBatman from "../assets/batman-logo.jpg";

const Footer = () => {
  return (
    <footer>
      <img
        style={{ objectFit: "contain" }}
        src={LogoBatman}
        id="logo"
        alt="logo"
      />
      <span>Todos os direitos reservados &copy;</span>
      <span>Desenvolvido por: Marcos Henrique</span>

      <nav className="footer-navigation">
        <ul className="footer-list">
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
    </footer>
  );
};

export default Footer;
