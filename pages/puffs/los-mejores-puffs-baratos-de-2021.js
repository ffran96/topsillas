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
import { CabeceraData, TopData, Contenido } from "../../data/PuffsBaratos";

export default function sillasGamers() {
  return (
    <>
      <SEO
        url="puffs/los-mejores-puffs-baratos-de-2021"
        title="Las mejores puffs baratos de 2021"
        description="Echa un vistazo a la collección de los mejores puffs baratos de 2021 que hemos preparado para ti."
        img="https://www.topsillas.info/_next/image?url=%2Fpuff-sillon.jpg&w=640&q=75"
        width="644"
        height="1109"
      />
      <Navbar />
      <TablaContenido contenido={Contenido} />
      <Container>
        <Migas
          category="Puffs"
          categoryURL="/puffs"
          article="Los mejores puffs baratos de 2021"
        />
        <Cabecera
          title={CabeceraData.title}
          titleId={CabeceraData.titleId}
          img={CabeceraData.img}
          text={CabeceraData.text}
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
