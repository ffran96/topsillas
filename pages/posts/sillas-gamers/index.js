import { Navbar, SEO, Footer, Conclusiones, Cabecera, Buttom, TopBox, TablaContenido } from '/components/Imports'
import { AmazonURLS, CabeceraText, TopText, contenido, conclusiones, img, NumItems, ImgCabecera } from '../../../data/SillasGamers'

function sillasGamers () {
  return (
    <>
      <SEO
        title="Sillas gamers"
        description="¡Encuentra tu silla ideal al mejor precio y calidad!"
      />
      <Navbar />
      <TablaContenido contenido={contenido} />
      <div className="container">
        <Cabecera
          title={contenido[0].url}
          img={ImgCabecera}
          text={CabeceraText}
        />

        {NumItems.map((NumItems, index) => (
          <div className="top">
            <TopBox
              title={contenido[index + 1].url}
              img={img[index].title}
              width={img[index].width}
              height={img[index].height}
              url={AmazonURLS[index]}
              text={TopText[index]}
            />
            <Conclusiones
              vtg={conclusiones[index].vtg}
              dtg={conclusiones[index].dtg}
            />
            <Buttom url={AmazonURLS[index]} label="Ver precio" />
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
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
          }
        }

        @media only screen and (min-width: 990px) {
          .container {
          }
        }

        @media only screen and (min-width: 1200px) {
          .container {
            max-width: 1400px;
            margin: auto;
            background-color: #FFFFFF;
            padding: 25px;
          }

          .top {
            margin-bottom: 3.5em;
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
  )
}

export default sillasGamers
