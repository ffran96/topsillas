import React from "react";

export default function index() {
  return (
    <>
      <div className="container">
          <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="/sillas-gamers">Categorías</a></li>
              <li><a href="/sillas-gamers/mejores-sillas-gaming-por-menos-de-100-euros">Marcas</a></li>
          </ul>
      </div>

      <style jsx>
        {`
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
          .container {
            position: sticky;
            top: 65px;
            z-index:10;
            width: 100%;
            background-color: #000000E6;
            color: white;
            padding: 1em;
          }

          .container ul{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            }

          .container ul li{
            list-style: none;
            justify-content: space-between;
            padding: 0.5em;
 
          }

          a{
              color: white;
              text-decoration: none;
              font-size: 20px;
              font-weight: bold;
              padding: 0.5em 4.5em;
          }
        `}
      </style>
    </>
  );
}
