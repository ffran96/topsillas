import {
  Navbar,
  SEO,
  Footer,
  Articulos,
  Migas,
  Container,
} from "/components/Imports";
import { ArtsSillasOficina } from "../../data/ArticulosSillasOficina";

export default function index() {
  return (
    <>
      <SEO
        url="sillas-de-oficina"
        title="Sillas de oficina"
        description="¡Encuentra tu silla de oficina ideal al mejor precio y calidad!"
        img="https://www.topsillas.info/_next/image?url=%2Fsilla-oficina.jpg&w=256&q=75"
        width="644"
        height="1109"
      />
      <Navbar />
      <Container>
        <Migas category="Sillas de oficina" categoryURL="/sillas-de-oficina" />
        <Articulos Data={ArtsSillasOficina} />
      </Container>

      <Footer />
    </>
  );
}
