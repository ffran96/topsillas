import { Navbar, SEO, Footer } from "/components/Imports";

export default function Custom404() {
  return (
    <>
      <SEO
        title="Error 404"
        description="No hemos podido encontrar lo que buscabas 😥"
      />
      <Navbar />
      <div className="container">
        <h1>Error 404 - Página no encontrada 😥</h1>
      </div>

      <Footer />

      <style jsx>{`
        .container {
          margin: 0;
          min-height: 720px;
          padding: 1em;
          background-color: #ffffff;
        }

        .top {
          margin-bottom: 2.5em;
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

          .top {
            margin-bottom: 3.5em;
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
