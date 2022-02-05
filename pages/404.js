import { Navbar, SEO, Footer, Container } from "/components/Imports";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <SEO
        title="Error 404"
        description="No hemos podido encontrar lo que buscabas 😥"
      />
      <Navbar />
      <Container>
        <div className="gif">
          <Image
            src="/404.gif"
            alt="pagina no encontrada error 404"
            width={640}
            height={640}
          ></Image>
        </div>
      </Container>

      <Footer />

      <style jsx>{`
        .gif {
          max-width: 640px;
          max-height: 640px;
          margin: auto;
        }
      `}</style>
    </>
  );
}
