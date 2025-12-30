import { useState, useEffect } from 'react';
import "./sobre.css";

function Sobre() {

  return <section id="sobre" className="sobre-section" >
    <div className="sobre-container">
      <div >{/*className={`sobre-reveal ${isVisible ? "visible" : ""}`}*/}
        <h2 className="sobre-title">
          Sobre <span className="sobre-title-accent">Mim</span>
        </h2>

        <div className="sobre-grid">
          {/* icones */}
          <div className="sobre-left">
            <div className="icon-box">
              <div className="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="icon-title">Nome</h3>
                <p className="icon-text">Rodrigo Castro Albano</p>
              </div>
            </div>

            <div className="icon-box">
              <div className="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="icon-title">Idade</h3>
                <p className="icon-text">29 anos</p>
              </div>
            </div>

            <div className="icon-box">
              <div className="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="icon-title">Formação</h3>
                <p className="icon-text">
                  Diploma in Information Technology: Programmer Analyst
                </p>
              </div>
            </div>

            <div className="icon-box">
              <div className="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="icon-title">Experiência</h3>
                <p className="icon-text">2 anos e 2 meses</p>
              </div>
            </div>
          </div>

          {/* textos */}
          <div className="sobre-right">
            <p className="sobre-paragraph">
              Sou um Desenvolvedor Fullstack com formação
              no exterior na área de análise de sistemas, com uma base sólida em princípios da programação e apaixonado por desafios.
            </p>

            <p className="sobre-paragraph">
              Programador com base consistente em linguagens orientadas a objetos, utilizando C# e Java principalmente. 
              Com experiência na administração de bancos de dados em ambientes virtuais, em nuvem e on-premises, utilizando bases relacionais e não relacionais. 
            </p>

            <p className="sobre-paragraph">
             Com portfólio composto por um sistema de gestão de estoque, além de projetos mobile e web, disponíveis entre meus Projetos. Atuação com a stack principal em C#, JavaScript (Vanilla) e React, com integração ao SQL Server.

            </p>

            <p className="sobre-paragraph">
              Me destaco em ambientes colaborativos, resolvendo problemas
              complexos e aprendendo continuamente novas tecnologias.
            </p>

            <div className="sobre-button-wrapper">
              <a
                href="https://www.linkedin.com/in/rodrigo-castro-albano-itpa/"
                target="_blank"
                rel="noopener noreferrer"
                className="sobre-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
                Ver Currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Sobre;