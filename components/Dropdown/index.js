import { MenuItemsHogar, MenuItemsBebe } from "./Items";
import React, { useState } from "react";
import Link from "next/link";

export default function index() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div
        onClick={() => setDropdown(!dropdown)}
        className={dropdown ? "hide-container" : "container"}
      >
        <div className="categorias">
          <div className="col">
            <ul>
              {MenuItemsHogar.map((item) => {
                return (
                  <Link href={item.path} key={item.id} onClick={() => setDropdown(false)}>
                    <a><li>{item.title}</li></a>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <ul>
              {MenuItemsBebe.map((item) => {
                return (
                  <Link href={item.path} key={item.id} onClick={() => setDropdown(false)}>
                    <a>
                      <li>{item.title}</li>
                    </a>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <ul>
              {MenuItemsBebe.map((item) => {
                return (
                  <Link href={item.path} key={item.id} onClick={() => setDropdown(false)}>
                    <a>
                      <li>{item.title}</li>
                    </a>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          a {
            color: #ffffff;
            text-decoration: none;
          }
          .container {
            position: absolute;
            z-index: 100;
            position: absolute;
            top: 86px;
            right: 10%;
            border-top: 3px solid #1f1f1f;
            background-color: #000000f2;
            border-radius: 0 0 15px 15px;
          }
          .hide-container {
            display: none;
          }
          .categorias {
            display: flex;
            justify-content: space-around;
            max-width: 900px;
            padding: 2em;
            margin: auto;
          }
          .col ul li {
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            padding: 0.5em;
            list-style: none;
          }
          .col ul li:hover {
            cursor: pointer;
            background-color: #ffffff1a;
          }
        `}
      </style>
    </>
  );
}
