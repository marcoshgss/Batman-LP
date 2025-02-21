import React from "react";
import TrailerBatman from "../assets/BATMAN   Trailer 2 Oficial Legendado  DC FanDome 2021_1080p.mp4";
import LogoBatman from "../assets/batman-logo.jpg";

const Main = () => {
  return (
    <>
      <div id="banner"></div>
      <div id="trailer-content">
        <div className="content">
          <video controls className="trailer">
            <source src={TrailerBatman} type="video/mp4" />
            Seu navegador não possui suporte para vídeos
          </video>
          <div id="sinopse">
            <p className="description">
              Após dois anos espreitando as ruas como Batman, Bruce Wayne se
              encontra nas profundezas mais sombrias de Gotham City. Com poucos
              aliados confiáveis, o vigilante solitário se estabelece como a
              personificação da vingança para a população.
            </p>
            <button className="button">Comprar ingresso</button>
          </div>
        </div>
      </div>

      <div className="actor-cards-container">
        <div className="cards-content">
          <div className="card banner-1">Robert Pattison - Batman</div>
          <div className="card banner-2">Zoe Kravitz - Mulher Gato </div>
          <div className="card banner-3">Jeffrey Wright - Gordon</div>
        </div>
      </div>

      <div className="container-contact">
        <div className="contact-section">
          <div className="left-side">
            <h1>
              PERGUNTAS? <br /> COMENTÁRIOS? <br /> GOSTARÍAMOS MUITO DE OUVIR
              DE VOCÊ.
            </h1>
            <div className="contact-details">
              <div className="contact-detail">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt exercitationem nulla laboriosam excepturi culpa
                  doloribus nisi ipsa beatae deleniti, aperiam illum ullam nihil
                  inventore? Sit, ex. Iure tempora accusantium rem!
                </p>
              </div>
            </div>
          </div>

          <form className="right-side">
            <label htmlFor="">Seu Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              name="name"
              required
            />
            <label htmlFor="">Seu Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              name="email"
              required
            />
            <label htmlFor="">Escreva sua mensagem aqui</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Escreva a sua menssagem"
              required
            ></textarea>
            <button className="button">Enviar</button>
          </form>
        </div>
      </div>

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
    </>
  );
};

export default Main;
