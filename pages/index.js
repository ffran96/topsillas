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
        url=""
        title="Inicio"
        description="¡Encuentra tu silla ideal al mejor precio y calidad!"
        img="https://www.topsillas.info/_next/image?url=%2Fsilla-comedor.jpg&w=384&q=75"
        width="644px"
        height="1109px"
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
