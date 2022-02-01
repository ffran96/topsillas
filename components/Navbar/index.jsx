import Link from "next/link";
import Image from "next/image";
import { Buscador } from "../Imports";
import { MenuItemsHogar, MenuItemsBebe } from "../Dropdown/Items";

const Items = MenuItemsHogar.concat(MenuItemsBebe);

export default function index() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-superior">
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
              <Buscador />
            </div>
            <div className="btn-grad">
              Menú <i className="fas fa-caret-down" />
            </div>
          </div>
          <div className="header-inferior">
            <ul className="lista">
              {Items.map((item) => (
                <li key={item.id} className="item-lista">
                  <Link href={item.path}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .header {
          background-color: #000000;
          padding-top: 15px;
          padding-bottom: 10px;
        }
        .container {
          display: flex;
          gap: 15px;
          flex-direction: column;
          justify-content: space-between;
          max-width: 1200px;
          margin: auto;
        }
        .header-superior {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          cursor: pointer;
        }
        .buscador {
        }

        .btn-grad {
          background-image: linear-gradient(
            to right,
            #232526 0%,
            #414345 51%,
            #232526 100%
          );
        }
        .btn-grad {
          padding: 10px;
          text-align: center;
          transition: 0.5s;
          background-size: 200% auto;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .btn-grad:hover {
          background-position: right center;
          color: #fff;
        }

        .header-inferior {
        }
        .lista {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .item-lista {
        }
        li {
          list-style: none;
        }
        .item-lista a {
          text-decoration: none;
          color: #ffffff;
          font-size: 12.5px;
          font-weight: 500;
          background-color: #ffffff33;
          padding: 3px;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}
