import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="container-contact">
      <div className="contact-section">
        <div className="left-side">
          <h1>
            PERGUNTAS? <br /> COMENTÁRIOS? <br /> GOSTARÍAMOS MUITO DE OUVIR DE
            VOCÊ.
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
  );
};

export default Contact;
