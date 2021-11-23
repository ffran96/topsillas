import { Navbar, SEO, Footer, Articulos } from "/components/Imports";
import { ArtsPuffs } from "../../data/ArtsPuffs";

function index() {
  return (
    <>
      <SEO
        url="puffs"
        title="Puffs"
        description="No te pierdas la selección de los mejores puffs 🪑 baratos, cómodos y grandes que hemos preparado para ti."
        img="https://www.topsillas.info/_next/image?url=%2Fpuff.jpg&w=256&q=75"
        width="1429"
        height="1500"
      />
      <Navbar />
      <div className="container">
        <Articulos Data={ArtsPuffs} />
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
