import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "/components/Dropdown";
import DropDownMobile from "/components/DropDownMobile";

export default function index() {
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Link href="/">
              <Image src="/logo.svg" alt="top sillas" width={170} height={35} />
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link href="#">
                  <a>Categorías <i className="fas fa-caret-down" /></a>
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li>
                <Link href="#">
                  <a>Marcas <i className="fas fa-caret-down" /></a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="buttom-menu" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </nav>
      </div>
      {click && <DropDownMobile />}

      <style jsx>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        .nav-links {
          display: none;
        }
        .container {
          background-color: #000000e6;
          height: 65px;
          z-index: 10;
        }
        .nav {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 80%;
          margin: auto;
        }
        .buttom-menu{
          color: white;
          font-size: 2.3em;
        }

        .logo {
          cursor: pointer;
        }

        @media only screen and (min-width: 1600px) {
          .buttom-menu {
            display: none;
          }
          .nav-links {
            display: block;
          }
          .container {
            height: 86px;
          }
          .nav {
            height: 100%;
            max-width: 1200px;
            margin: auto;
          }

          .logo {
            margin: 0;
          }

          ul {
            list-style-type: none;
            display: flex;
          }

          a {
            text-decoration: none;
            color: #ffffff;
            font-weight: 700;
            cursor: pointer;
            padding: 1.7em 1em;
            font-size: 18px;
          }

          a:hover {
            background-color: #ffffff0d;
          }
        }
      `}</style>
    </>
  );
}
