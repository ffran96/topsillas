import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
          padding: 1.5em 0;
          align-items: center;
          background-color: #000000E6;
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
          .header {
            flex-direction: row;
            justify-content: space-between;
          }

          .nav{
            padding: 1.5em 22em 1.5em 22em;

          }

          .logo {
            margin: 0;
          }

          a:hover {
            background-color: #FFFFFF0D;
          }
          
          @media only screen and (min-width: 1920px) {
            .nav {
              flex-direction: row;
              justify-content: space-between;
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
  )
}

export default index
