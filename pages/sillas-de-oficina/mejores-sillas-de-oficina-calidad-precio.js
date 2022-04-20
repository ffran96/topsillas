import {
  Navbar,
  SEO,
  Footer,
  Conclusiones,
  Cabecera,
  Buttom,
  TopBox,
  TablaContenido,
  Migas,
  Container,
  ContainerTop,
} from "/components/Imports";
import {
  CabeceraData,
  TopData,
  Contenido,
} from "../../data/SillasOficinaCalidadPrecio";

export default function sillasGamers() {
  return (
    <>
      <SEO
        url="sillas-gamers/mejores-sillas-gaming-por-menos-de-100-euros"
        title="Las mejores sillas gaming por menos de 100 euros"
        description="En este artículo podrás encontrar las mejores sillas gaming del mercado por menos de 100 euros."
        img="https://www.topsillas.info/_next/image?url=%2Foficina.jpg&w=640&q=75"
        width="644"
        height="1109"
      />
      <Navbar />
      <TablaContenido contenido={Contenido} />
      <Container>
        <Migas
          category="Sillas de oficina"
          categoryURL="/sillas-de-oficina"
          article="Mejores sillas de oficina relación calidad precio"
        />
        <Cabecera
          title={CabeceraData.title}
          titleId={CabeceraData.titleId}
          img={CabeceraData.img}
          text={CabeceraData.text}
          width={478.4}
          height={268.4}
        />

        {TopData.map((item) => (
          <ContainerTop key={item.id}>
            <TopBox
              title={item.title}
              titleId={item.titleId}
              img={item.imgSrc}
              width={item.width}
              height={item.height}
              url={item.AmazonURL}
              text={item.text}
            />
            <Conclusiones
              vtg={item.conclusiones.vtg}
              dtg={item.conclusiones.dtg}
            />
            <Buttom url={item.AmazonURL} label="Ver precio" />
          </ContainerTop>
        ))}
      </Container>

      <Footer />
    </>
  );
}
