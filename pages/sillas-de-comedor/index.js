import { Navbar, SEO, Footer, Articulos, Migas } from "/components/Imports";
import { ArtsComedor } from "../../data/ArtsComedor";

function index() {
  return (
    <>
      <SEO
        url="sillas-de-comedor"
        title="Sillas de comedor"
        description="No te pierdas la selección de los mejores sillas de comedor 🪑 baratos, cómodos y grandes que hemos preparado para ti."
        img="https://www.topsillas.info/_next/image?url=%2Fpuff.jpg&w=256&q=75"
        width="1429"
        height="1500"
      />
      <Navbar />
      <div className="container">
      <Migas
            category="Sillas de comedor"
            categoryURL="/sillas-de-comedor"
          />
        <Articulos Data={ArtsComedor} />
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
