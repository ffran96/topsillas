import React from "react";

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
              <li>Sillas gaming</li>
              <li>Sillas de oficina</li>
              <li>Puffs</li>
              <li>Sillas de comedor</li>
              <li>Sillas de exterior</li>
              <li>Taburetes para barra/cocina</li>
              <li>Sillones de masaje</li>
              <li>Sillas mecedoras</li>
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Artículos recomendados</b>
            </span>
            <ul>
              <li>Top sillas gaming por menos de 100 euros</li>
              <li>Top 5 mejores sillas de oficina relación calidad precio</li>
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Legal</b>
            </span>
            <ul>
              <li>Política de privacidad</li>
              <li>Política de cookies</li>
              <li>Aviso legal</li>
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Contactar</b>
            </span>
            <ul>
              <li>Sobre nosotros</li>
              <li>Contacto</li>
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

        footer {
          bottom: 0;
          background-color: #000000e6;
        }
        .container {
          display: flex;
          justify-content: space-between;
          max-width: 900px;
          margin: auto;
          padding: 2em;
        }
        .col ul{
          margin-top: 1.2em;
        }
        .col ul li {
          color: #ffffffE6;
          list-style: none;
          padding: 0.3em;
          max-width: 250px;
        }
        .title{
          color: #FFFFFF;
        }

        .col ul li:hover {
          cursor: pointer;
          background-color: #ffffff1a;
        }
        p {
          margin-top: 1.5em;
          color: #ffffff;
          text-align: center;
          padding: 0 0 2em 0em;
        }
      `}</style>
    </>
  );
};

export default index;
