import Link from "next/link";
import Image from "next/image";
import { Buscador } from "/components/Imports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Dropdown } from "/components/Imports";

export default function Navbar() {
  const [HandleClick, setHandleClick] = useState(false);
  return (
    <>
      {HandleClick && <Dropdown />}
      <header className="header">
        <nav className="container">
          <div className="logo">
            <Link href="/">
              <a>
                <Image
                  src="/logo.svg"
                  alt="top sillas"
                  width={150}
                  height={35}
                />
              </a>
            </Link>
          </div>
          <div className="buscador">
            {
              // <Buscador />
            }
          </div>
          <div className="Lista">
            <ul className="Categorias">
              <li>Uso</li>
              <li>Estancias</li>
              <li>Material</li>
              <li>Diseño</li>
              <li>Marcas</li>
            </ul>
          </div>
          <div
            onClick={() => setHandleClick(!HandleClick)}
            className="mobile-buttom-menu"
            style={{ width: "25px", color: "white" }}
          >
            <FontAwesomeIcon icon={HandleClick ? faXmark : faBars} />
          </div>
        </nav>
      </header>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .header {
          background-color: #2c3e50;
          height: 70px;
        }
        .container {
          display: flex;
          height: 70px;
          margin: auto;
          align-items: center;
          justify-content: space-between;
          max-width: 350px;
        }

        .logo {
          cursor: pointer;
        }
        .buscador {
        }

        .Lista {
          display: flex;
          text-decoration: none;
        }
        .Lista {
          color: white;
          font-size: 14px;
          font-weight: 700;
        }
        .Lista .Categorias {
          gap: 2em;
          list-style: none;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .Lista .About {
          padding: 25px 20px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .mobile-buttom-menu {
          display: none;
        }

        @media only screen and (max-width: 768px) {
          .Lista {
            display: none;
          }
          .mobile-buttom-menu {
            display: block;
            z-index: 100;
            cursor: pointer;
          }
        }

        @media only screen and (min-width: 600px) {
          .header-inferior {
            display: block;
          }
          .container {
            max-width: 472px;
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
            max-width: 640px;
          }
        }

        @media only screen and (min-width: 990px) {
          .container {
            max-width: 862px;
          }
        }

        @media only screen and (min-width: 1200px) {
          .container {
            max-width: 1072px;
          }
        }

        @media only screen and (min-width: 1600px) {
          .container {
            max-width: 1200px;
          }
        }
      `}</style>
    </>
  );
}
