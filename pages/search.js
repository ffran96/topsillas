import { useRouter } from "next/router";
import { Navbar, SEO, Footer, Articulos, Container } from "/components/Imports";

export default function Search() {
  const router = useRouter()
  const { term } = router.query
  
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
      <Container>
        <h2>{aviso}</h2>
        <Articulos Data={filterPosts} />
      </Container>
      <Footer />
    </>
  );
}