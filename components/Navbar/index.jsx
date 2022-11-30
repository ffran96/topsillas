import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Buscador } from "/components/Imports";

export default function index() {
  return (
    <>
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
            <div className="Categorias">
              <span>CATEGORÍAS</span>
            </div>
            <Link href="/sobre-nosotros">
              <a>
                <div className="About">
                  <span>SOBRE NOSOTROS</span>
                </div>
              </a>
            </Link>
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
        }
        .Lista {
          color: white;
          font-size: 14px;
          font-weight: 700;
        }
        .Lista .Categorias {
          padding: 25px 20px;
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
