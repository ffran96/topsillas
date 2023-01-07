import { CategoriasBox } from "/components/Imports";

import React from "react";

export default function Categories({ props }) {
  return (
    <>
      <div className="cover">
        <h1>Top Sillas | Las mejores reseñas y comparativas sobre sillas</h1>
        <p>
          <b>¡Bienvenido a Topsillas.info!</b> Somos un blog enfocado en
          proporcionar<b> reseñas y comparativas de sillas</b> disponibles en
          Amazon. En nuestro sitio, encontrarás información detallada sobre{" "}
          <b>sillas gaming, sillas de escritorio, sillas ergonómicas, etc...</b>{" "}
        </p>
        <p>
          Nuestro objetivo es ayudarte a encontrar la silla perfecta para tus
          necesidades, ya sea para{" "}
          <b>
            jugar a videojuegos, trabajar en el ordenador o simplemente sentarte
            cómodamente durante largas horas.{" "}
          </b>
          Si estás buscando una <b>silla ergonómica</b> para evitar problemas de
          espalda o una <b>silla gaming</b> para mejorar tu experiencia de
          juego, ¡has venido al lugar correcto! Nos esforzamos por proporcionar
          <b> información precisa y útil</b> para que puedas tomar una decisión
          informada sobre <b>qué silla es la mejor para ti.</b> ¡Esperamos que
          disfrutes de tu visita a Topsillas.info y no dudes en contactarnos con
          cualquier pregunta o sugerencia!
        </p>
      </div>
      <h2>Categorías</h2>
      <div className="container">
        {props.map((i, index) => (
          <CategoriasBox
            key={index}
            link={"/" + i.slug}
            src={i.acfImagen.imagen.sourceUrl}
            alt={i.acfImagen.imagen.altText}
            title={i.title}
            width={i.acfImagen.imagen.mediaDetails.width}
            height={i.acfImagen.imagen.mediaDetails.height}
          />
        ))}
      </div>

      <style jsx>{`
        .cover {
          padding: 10px;
          background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("https://assets.architecturaldigest.in/photos/60083ce108ae763b9ae852fa/master/w_1920,h_1080,c_limit/dlf-magnolias-gurugram-penthouse-featured-image.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          height: calc(100vh - 70px);

        }

        .container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1em;
          max-width: 320px;
          margin: auto;
          margin-top: 1em;
        }

        .box {
          background-color: white;
          border-radius: 15px;
          height: 300px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          flex-direction: column;
          box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .box:hover {
          transform: scale(1.02);
          filter: opacity(75%);
        }

        .image {
          margin: auto;
        }

        .title-box {
          margin: 0 010 10px;
        }
        h1 {
          color: #FFF;
          max-height: calc(100vh - 70px);
          margin: auto;
          margin-top: 0.7em;
          font-size: 24px;
        }

        h2 {
          max-width: 320px;
          margin: auto;
          margin-top: 0.7em;
        }

        p { 
          color: #FFF;
          max-width: 320px;
          margin: auto;
          margin-top: 0.7em;
          line-height: 40px;
          font-size: 20px;
          text-align: justify;
        }

        @media only screen and (min-width: 600px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 472px;
          }
          h1 {
            max-width: 472px;
            font-size: 32px;
          }
          h2 {
            max-width: 472px;
          }
          p {
            max-width: 472px;
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 640px;
          }
          h1 {
            max-width: 640px;
            font-size: 32px;
          }
          h2 {
            max-width: 640px;
          }
          p {
            max-width: 640px;
          }
        }

        @media only screen and (min-width: 990px) {
          .container {
            grid-template-columns: repeat(3, 1fr);
            max-width: 862px;
          }
          h1 {
            max-width: 862px;
            font-size: 32px;
          }
          h2 {
            max-width: 862px;
          }
          p {
            max-width: 862px;
          }
        }

        @media only screen and (min-width: 1200px) {
          .container {
            grid-template-columns: repeat(3, 1fr);
            max-width: 1072px;
            margin: auto;
            margin-top: 1em;
          }
          h1 {
            max-width: 1072px;
            font-size: 32px;
          }
          h2 {
            max-width: 1072px;
          }
          p {
            max-width: 1072px;
          }
        }

        @media only screen and (min-width: 1600px) {
          .container {
            grid-template-columns: repeat(4, 1fr);
            max-width: 1200px;
          }
          h1 {
            max-width: 1200px;
            font-size: 32px;
          }
          h2 {
            max-height: calc(100vh - 70px);
          }
          p {
            max-width: 1200px;
          }
        }
      `}</style>
    </>
  );
}
