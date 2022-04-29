import React from "react";
import Link from "next/link";
import {
  MenuItemsHogar,
  MenuItemsBebe,
  ArticulosRecomendados,
  Legal,
  Contactar,
} from "../Dropdown/Items";

const index = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="col">
            <span className="title">
              <b>Categorías para el hogar</b>
            </span>
            <ul>
              {MenuItemsHogar.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Categorías para nuestro bebé</b>
            </span>
            <ul>
              {MenuItemsBebe.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Artículos recomendados</b>
            </span>
            <ul>
              {ArticulosRecomendados.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Legal</b>
            </span>
            <ul>
              {Legal.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <span className="title">
              <b>Contactar</b>
            </span>
            <ul>
              {Contactar.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
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
            max-width: 1200px;
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

          .col a:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      `}</style>
    </>
  );
};

export default index;
