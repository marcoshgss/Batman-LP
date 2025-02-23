import React from "react";
import TrailerBatman from "../assets/BATMAN   Trailer 2 Oficial Legendado  DC FanDome 2021_1080p.mp4";

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
    </>
  );
};

export default Main;
