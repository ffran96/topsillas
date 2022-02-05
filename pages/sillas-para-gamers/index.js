import {
  Navbar,
  SEO,
  Footer,
  Articulos,
  Migas,
  Container,
} from "/components/Imports";
import { ArtsSillasGamers } from "../../data/ArticulosSillasGamers";

export default function index() {
  return (
    <>
      <SEO
        url="sillas-gamers"
        title="Sillas Gamers"
        description="¡Encuentra tu silla gaming ideal!"
        img="https://www.topsillas.info/_next/image?url=%2Fsilla-gaming.jpg&w=256&q=75"
        width="644"
        height="1109"
      />
      <Navbar />
      <Container>
        <Migas category="Sillas gamers" categoryURL="/sillas-gamers" />
        <Articulos Data={ArtsSillasGamers} />
      </Container>

      <Footer />
    </>
  );
}
