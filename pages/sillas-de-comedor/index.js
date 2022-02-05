import {
  Navbar,
  SEO,
  Footer,
  Articulos,
  Migas,
  Container,
} from "/components/Imports";
import { ArtsComedor } from "../../data/ArtsComedor";

export default function index() {
  return (
    <>
      <SEO
        url="sillas-de-comedor"
        title="Sillas de comedor"
        description="No te pierdas la selección de los mejores sillas de comedor 🪑 baratos, cómodos y grandes que hemos preparado para ti."
        img="https://www.topsillas.info/_next/image?url=%2Fpuff.jpg&w=256&q=75"
        width="1429"
        height="1500"
      />
      <Navbar />
      <Container>
        <Migas category="Sillas de comedor" categoryURL="/sillas-de-comedor" />
        <Articulos Data={ArtsComedor} />
      </Container>
      <Footer />
    </>
  );
}
