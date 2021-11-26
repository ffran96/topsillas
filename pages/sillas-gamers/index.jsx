import { Navbar, SEO, Footer, Articulos, Migas } from "/components/Imports";
import { ArtsSillasGamers } from "../../data/ArticulosSillasGamers";

function index() {
  return (
    <>
      <SEO
        url="sillas-gamers"
        title="Sillas Gamers"
        description="¡Encuentra tu silla gaming ideal!"
        img="https://www.topsillas.info/_next/image?url=%2Fsilla-comedor.jpg&w=384&q=75"
        width="644"
        height="1109"
      />
      <Navbar />
      <div className="container">
        <Migas category="Sillas gamers" categoryURL="/sillas-gamers" />
        <Articulos Data={ArtsSillasGamers} />
      </div>

      <Footer />

      <style jsx>{`
        .container {
          margin: 0;
          padding: 1em;
          background-color: #ffffff;
        }

        @media only screen and (min-width: 600px) {
          .container {
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
          }
        }

        @media only screen and (min-width: 990px) {
          .container {
          }
        }

        @media only screen and (min-width: 1200px) {
          .container {
            max-width: 1200px;
            margin: auto;
            background-color: #ffffff;
            padding: 2em 3em;
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

export default index;
