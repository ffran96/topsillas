import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "/components/Dropdown";

export default function index() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Link href="/">
              <Image src="/logo.svg" alt="top sillas" width={250} height={35} />
            </Link>
          </div>
          <div>
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
                <Link href="/categorias">
                  <a>Categorías</a>
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li>
                <Link href="/blog-post">
                  <a>Favoritos</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <style jsx>{`
      .container{
        background-color: #000000E6;
        z-index: 10000;
        
      }
      .nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5em 0;
        }

        .logo {
          margin-bottom: 1em;
          cursor: pointer;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
        }

        a {
          text-decoration: none;
          color: #FFFFFF;
          font-weight: 700;
          cursor: pointer;
          padding: 1em 1em;
          font-size: 18px;
        }

        @media only screen and (min-width: 1200px) {
          .nav{
            flex-direction: row;
            justify-content: space-between;
            max-width: 1072px;
            margin: auto;
          }

          .logo {
            margin: 0;
          }

          a:hover {
            background-color: #FFFFFF0D;
          }
          
          @media only screen and (min-width: 1600px) {
            .nav {
              max-width: 1200px;
              margin: auto;
            }

            .logo {
            }
            a {
              text-decoration: none;
              padding: 1.7em 1em;
            }
        }
      `}</style>
    </>
  );
}
