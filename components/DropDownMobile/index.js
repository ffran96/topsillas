import React from "react";

export default function index() {
  return (
    <>
      <div className="container">
          <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Categorías</a></li>
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
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: #000000F2;
            color: white;
            z-index: 10;
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
 
          }

          a{
              color: white;
              text-decoration: none;
              font-size: 22px;
          }
        `}
      </style>
    </>
  );
}
