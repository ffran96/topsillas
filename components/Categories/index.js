import { CategoriasBox } from "/components/Imports";

import React from "react";

export default function Categories({ props }) {
  return (
    <>
        <h1>Top Sillas | Las mejores reseñas y comparativas sobre sillas</h1>
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
          max-width: 320px;
          color: #000;
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
          color: #fff;
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
