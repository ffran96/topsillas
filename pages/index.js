import Head from "next/head";
import {
  Navbar,
  Categories,
  ArticulosRecomendados,
  Footer,
} from "/components/Imports";

const props = {
  url: "",
  title: "Las mejores reseñas y comparativas sobre sillas",
  description:
    "Ofertas 🛒, chollos 💸, primeras marcas 🔝, reseñas ✍... TODO lo que quieras saber sobre la silla que buscas lo tienes en Topsillas.info ▶ ¡No compres tu silla, sofá o sillón hasta conocer nuestra opinión 😁 !",
  img: "https://www.topsillas.info/_next/image?url=%2Fsilla-comedor.jpg&w=384&q=75",
  width: "644",
  height: "1109",
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <title>
          Top Sillas | Las mejores reseñas y comparativas sobre sillas
        </title>
        <meta name="description" content={props.description} />

        <link
          rel="canonical"
          href={"https://www.topsillas.info/" + props.url}
        />

        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Top Sillas | Las mejores reseñas y comparativas sobre sillas"
        />
        <meta property="og:description" content={props.description} />
        <meta
          property="og:url"
          content={"https://www.topsillas.info/" + props.url}
        />
        <meta property="og:site_name" content="Topsillas.info" />

        <meta property="og:image" content={props.img} />
        <meta property="og:image:width" content={props.width} />
        <meta property="og:image:height" content={props.height} />

        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          box-sizing: border-box;
          font-family: 'Open Sans', sans-serif;
          background-color: #ebedef;
        }
      `}</style>
    </>
  );
}
