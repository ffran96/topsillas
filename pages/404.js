import { Navbar, SEO, Footer } from "/components/Imports";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <SEO
        title="Error 404"
        description="No hemos podido encontrar lo que buscabas 😥"
      />
      <Navbar />
      <div className="container">
        <div className="gif">
          <Image
            src="/404.gif"
            alt="pagina no encontrada error 404"
            width={640}
            height={640}
          ></Image>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .container {
          margin: 0;
          width: 1200px;
          padding: 1em;
          background-color: #ffffff;
        }

        .gif {
          max-width: 640px;
          max-height: 640px;
          margin: auto;
        }

      
        @media only screen and (min-width: 1200px) {
          .container {
            max-width: 1200px;
            margin: auto;
            background-color: #ffffff;
          }
        }

        @media only screen and (min-width: 1600px) {
          .container {
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #ebedef;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
