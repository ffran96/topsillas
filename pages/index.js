import {
  Navbar,
  Categories,
  ArticulosRecomendados,
  Footer,
  SEO,
} from "/components/Imports";

export default function Home() {
  return (
    <>
      <SEO
        title="Inicio"
        description="¡Encuentra tu silla ideal al mejor precio y calidad!"
      />
      <Navbar />
      <Categories />
      <ArticulosRecomendados />
      <Footer />
      <style jsx>{``}</style>

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
