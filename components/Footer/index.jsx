import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="col">
            <span className="title">
              <b>Categorías recomendadas</b>
            </span>
            <ul>
              <Link href="/sillas-gamers">
                <a>
                  <li>Sillas gaming</li>
                </a>
              </Link>
              <Link href="/sillas-de-oficina">
                <a>
                  <li>Sillas de oficina</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>Puffs</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>Sillas de comedor</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>Sillas de exterior</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>Taburetes para barra/cocina</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>Sillones de masaje</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>Sillas mecedoras</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Artículos recomendados</b>
            </span>
            <ul>
              <Link href="/sillas-gamers/mejores-sillas-gaming-por-menos-de-100-euros">
                <a>
                  <li>Top sillas gaming por menos de 100 euros</li>
                </a>
              </Link>
              <Link href="/sillas-de-oficina/mejores-sillas-de-oficina-calidad-precio">
                <a>
                  <li>
                    Top 5 mejores sillas de oficina relación calidad precio
                  </li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Legal</b>
            </span>
            <ul>
              <Link href="/privacidad">
                <a>
                  <li>Política de privacidad</li>
                </a>
              </Link>
              <Link href="/cookies">
                <a>
                  <li>Política de cookies</li>
                </a>
              </Link>
              <Link href="/aviso-legal">
                <a>
                  <li>Aviso legal</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Contactar</b>
            </span>
            <ul>
              <Link href="/sobre-nosotros">
                <a>
                  <li>Sobre nosotros</li>
                </a>
              </Link>
              <Link href="/contacto">
                <a>
                  <li>Contacto</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <hr color="#505050"></hr>
          <p>TopSillas.com | Copyright © 2021</p>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
        }
        .container {
          display: none;
        }

        footer {
          bottom: 0;
          background-color: #000000e6;
        }
        p {
          margin-top: 1.5em;
          color: #ffffff;
          text-align: center;
          padding: 0 0 2em 0em;
        }

        @media only screen and (min-width: 1200px) {
          .container {
            display: flex;
            justify-content: space-between;
            max-width: 900px;
            margin: auto;
            padding: 2em;
          }
          .col ul {
            margin-top: 1.2em;
          }
          .col ul li {
            color: #ffffffe6;
            list-style: none;
            padding: 0.3em;
            max-width: 250px;
          }
          .title {
            color: #ffffff;
          }

          .col ul li:hover {
            cursor: pointer;
            background-color: #ffffff1a;
          }
        }
      `}</style>
    </>
  );
};

export default index;
