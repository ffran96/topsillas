import React from "react";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <>
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
            <li>
              <Link href="/about">
                <a>Categorias</a>
              </Link>
            </li>
            <li>
              <Link href="/blog-post">
                <a>Favoritos</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .nav {
          display: flex;
          flex-direction: column;
          padding: 2em 0 1em 0 ;
          align-items: center;
        }

        .logo {
          cursor: pointer;
          margin-bottom: 15px;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
        }

        a {
          text-decoration: none;
          color: black;
          font-weight: 700;
          cursor: pointer;
          padding: 1em;
          border-radius: 45px;
          font-size: 18px;
          transition: all .4s ease-in-out;

        }

        a:hover {
          background-color: #0000000D;
        }

        @media only screen and (min-width: 1200px) {
          .header {
            margin-left: 250px;
            margin-right: 250px;            
            flex-direction: row;
            justify-content: space-between;
          }

          .logo {
            margin-bottom: 15px;
          }
          
          @media only screen and (min-width: 1920px) {
            .nav {
              margin-left: 250px;
              margin-right: 250px;
              flex-direction: row;
              justify-content: space-between;
            }

            .logo {
              margin-bottom: 15px;
            }
        }
      `}</style>
    </>
  );
};

export default index;
