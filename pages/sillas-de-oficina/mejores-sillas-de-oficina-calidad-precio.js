import { Navbar, SEO, Footer, Conclusiones, Cabecera, Buttom, TopBox, TablaContenido } from '/components/Imports'
import { CabeceraData, TopData, Contenido } from "../../data/SillasOficina"
function sillasGamers () {
  return (
    <>
      <SEO
        url="sillas-de-oficina/mejores-sillas-de-oficina-calidad-precio"
        title="Las mejores sillas de oficina relación calidad precio"
        description="¡Encuentra tu silla de oficina ideal al mejor precio y calidad!"
        img="https://www.topsillas.info/_next/image?url=%2Fsilla-comedor.jpg&w=384&q=75"
        width="644"
        height="1109"
      />
      <Navbar />
      <TablaContenido contenido={Contenido} />
      <div className="container">
        <Cabecera
          title={CabeceraData.title}
          titleId={CabeceraData.titleId}
          img={CabeceraData.img}
          text={CabeceraData.text}
        />

        {TopData.map((item) => (
          <div className="top">
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
          </div>
        ))}
      </div>

      <Footer />

      <style jsx>{`
        .container {
          margin: 0;
          padding: 1em;
          background-color: #FFFFFF;
        }

        .top {
          margin-bottom: 2.5em;
        }

        @media only screen and (min-width: 600px) {
          .container {
            max-width: 472px;
            margin: auto;
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
            max-width: 640px;

          }
        }

        @media only screen and (min-width: 990px) {
          .container {
            max-width: 862px;
          }
        }

        @media only screen and (min-width: 1200px) {
          .container {
            max-width: 1072px;
            background-color: #FFFFFF;
            padding: 2em 3em;
          }

          .top {
            margin-bottom: 3.5em;
          }
        }

        @media only screen and (min-width: 1600px) {
          .container {
            max-width: 1200px;
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
  )
}

export default sillasGamers
