import { useRouter } from "next/router";
import { Navbar, SEO, Footer, Articulos } from "/components/Imports";

const posts = [
  {
    id: 0,
    title: "Top 5 Mejores sillas de oficina relación calidad precio",
    text: (
      <>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          ex illum quod qui rerum. Repellendus amet odit asperiores placeat quia
          dolorum, fugiat voluptas, quaerat molestiae magnam eos veniam deleniti
          veritatis.
        </p>
      </>
    ),
    link: "/sillas-de-oficina/mejores-sillas-de-oficina-calidad-precio",
    src: "oficina",
    alt: "oficina con sillas de oficina",
    tags: "sillas gamers",
  },
  {
    id: 1,
    title: "Top 5 Mejores sillas de oficina relación calidad precio",
    text: (
      <>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          ex illum quod qui rerum. Repellendus amet odit asperiores placeat quia
          dolorum, fugiat voluptas, quaerat molestiae magnam eos veniam deleniti
          veritatis.
        </p>
      </>
    ),
    link: "/sillas-de-oficina/mejores-sillas-de-oficina-calidad-precio",
    src: "oficina",
    alt: "oficina con sillas de oficina",
    tags: "sillas de oficina",
  },
  {
    id: 2,
    title: "Top 5 Mejores sillas de oficina relación calidad precio",
    text: (
      <>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          ex illum quod qui rerum. Repellendus amet odit asperiores placeat quia
          dolorum, fugiat voluptas, quaerat molestiae magnam eos veniam deleniti
          veritatis.
        </p>
      </>
    ),
    link: "/sillas-de-oficina/mejores-sillas-de-oficina-calidad-precio",
    src: "oficina",
    alt: "oficina con sillas de oficina",
    tags: "sillas",
  },
  {
    id: 3,
    title: "Top 5 Mejores sillas de oficina relación calidad precio",
    text: (
      <>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          ex illum quod qui rerum. Repellendus amet odit asperiores placeat quia
          dolorum, fugiat voluptas, quaerat molestiae magnam eos veniam deleniti
          veritatis.
        </p>
      </>
    ),
    link: "/sillas-de-oficina/mejores-sillas-de-oficina-calidad-precio",
    src: "oficina",
    alt: "oficina con sillas de oficina",
    tags: "/puffs",
  },
  {
    id: 4,
    title: "Top 5 Mejores sillas de oficina relación calidad precio",
    text: (
      <>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          ex illum quod qui rerum. Repellendus amet odit asperiores placeat quia
          dolorum, fugiat voluptas, quaerat molestiae magnam eos veniam deleniti
          veritatis.
        </p>
      </>
    ),
    link: "/sillas-de-oficina/mejores-sillas-de-oficina-calidad-precio",
    src: "oficina",
    alt: "oficina con sillas de oficina",
    tags: "mecedoras",
  },
];

export default function Search() {

  const router = useRouter();
  const { term } = router.query;

  const filterPosts = posts.filter((post) => post.tags.includes(term));

  const verificar = posts.some((post) => post.tags.includes(term));
  let aviso = "";
  if (!verificar) {
    aviso = "No se encontraron resultados acerca de " + term + ".";
  } else {
    aviso = "Resultados encontrados acerca de " + term + ":";
  }

  return (
    <>
      <SEO title={term} description="Resultados encontrados" />
      <Navbar />
      <div className="container">
        <h2>{aviso}</h2>
        <Articulos Data={filterPosts} />
      </div>
      <Footer />

      <style jsx>{`
        .container {
          margin: 0;
          width: 1200px;
          min-height: 700px;
          padding: 1em 5em;
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
