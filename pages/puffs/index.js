import {
  Navbar,
  SEO,
  Footer,
  Articulos,
  Migas,
  Container,
} from "/components/Imports";
import { ArtsPuffs } from "../../data/ArtsPuffs";

export default function index() {
  return (
    <>
      <SEO
        url="puffs"
        title="Puffs"
        description="No te pierdas la selección de los mejores puffs 🪑 baratos, cómodos y grandes que hemos preparado para ti."
        img="https://www.topsillas.info/_next/image?url=%2Fpuff.jpg&w=256&q=75"
        width="1429"
        height="1500"
      />
      <Navbar />
      <Container>
        <Migas category="Puffs" categoryURL="/puffs" />
        <Articulos Data={ArtsPuffs} />
      </Container>

      <Footer />
    </>
  );
}
