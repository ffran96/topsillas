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
              <li>
                <Link href="/sillas-gamers">
                  <a>Sillas gaming</a>
                </Link>
              </li>
              <li>
                <Link href="/sillas-de-oficina">
                  <a>Sillas de oficina</a>
                </Link>
              </li>
              <li>
                <Link href="/puffs">
                  <a>Puffs</a>
                </Link>
              </li>
              <li>
                <Link href="/sillas-de-comedor">
                  <a>Sillas de comedor</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Sillas de exterior</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Taburetes para barra/cocina</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Sillones de masaje</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Sillas mecedoras</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Artículos recomendados</b>
            </span>
            <ul>
              <li>
                <Link href="/sillas-gamers/mejores-sillas-gaming-por-menos-de-100-euros">
                  <a>Top sillas gaming por menos de 100 euros</a>
                </Link>
              </li>
              <li>
                <Link href="/sillas-de-oficina/mejores-sillas-de-oficina-calidad-precio">
                  <a>Top 5 mejores sillas de oficina relación calidad precio</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Legal</b>
            </span>
            <ul>
              <li>
                <Link href="/politica-privacidad">
                  <a>Política de privacidad</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a>Política de cookies</a>
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal">
                  <a>Aviso legal</a>
                </Link>
              </li>
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
          <p>TopSillas.info | Copyright © 2022</p>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: #ffffffe6;
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
            list-style: none;
            padding: 0.3em;
            max-width: 250px;
          }
          .title {
            color: #ffffff;
          }

          .col ul li:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      `}</style>
    </>
  );
};

export default index;
