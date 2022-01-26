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
        title="Las mejores reseñas y comparativas sobre sillas"
        description="Ofertas 🛒, chollos 💸, primeras marcas 🔝, reseñas ✍... TODO lo que quieras saber sobre la silla que buscas lo tienes en Topsillas.info ▶ ¡No compres tu silla, sofá o sillón hasta conocer nuestra opinión 😁 !"
        img="https://www.topsillas.info/_next/image?url=%2Fsilla-comedor.jpg&w=384&q=75"
        width="644"
        height="1109"
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
