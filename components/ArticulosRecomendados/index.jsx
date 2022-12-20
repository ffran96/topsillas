import Image from "next/image";
import Link from "next/link";
import { ArtsRecData } from "../../data/ArticulosRecomendados";

export default function index({ props }) {
  return (
    <>
      <span>
        <h2>Artículos recomendados</h2>
      </span>

      {props.map((i) => (
        <Link
          href={"/" + i.categories.nodes[0].slug + "/" + i.slug}
          key={i.id}
          passHref
        >
          <div className="container">
            <article>
              <div className="figure">
                <Image
                  src={i.acfArticulo.cabecera.portada.sourceUrl}
                  alt={i.acfArticulo.cabecera.portada.altText}
                  width={598}
                  height={335.5}
                />
              </div>
              <div className="text">
                <h3>{i.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: i.excerpt }} />

                <Link href={"/" + i.categories.nodes[0].slug + "/" + i.slug}>
                  <a>
                    <div className="buttom"> Leer más</div>
                  </a>
                </Link>
              </div>
            </article>
          </div>
        </Link>
      ))}

      <style jsx>{`
        .container {
          max-width: 320px;
          margin: auto;
          background-color: #ffffff;
          border-radius: 15px;
          margin-bottom: 2em;
          margin-top: 1em;
          box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
        }
        article {
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .figure {
          border-radius: 15px 15px 0px 0px;
          overflow: hidden;
        }
        .text {
          line-height: 32px;
          max-width: 700px;
          margin: 16px;
        }
        .buttom {
          float: right;
          padding: 0.8em;
          background-color: #2c3e50;
          color: #ffffff;
          font-weight: 700;
          text-align: center;
          border-radius: 49px;
          cursor: pointer;
          transition: all 0.2s ease-in;
          border: 2px solid transparent;
        }

        a {
          color: #000000;
          text-decoration: none;
        }
        span h2 {
          max-width: 320px;
          margin: auto;
          margin-top: 1em;
          font-size: 22px;
        }
        h3 {
          font-size: 22px;
          line-height: 1.3;
          text-align: center;
          margin: 0;
        }
        @media only screen and (min-width: 600px) {
          .container {
            grid-template-columns: repeat(1, 1fr);
            max-width: 472px;
          }
          span h2 {
            max-width: 472px;
          }
          .figure {
            border-radius: 0;
            overflow: visible;
            margin: 16px;
          }
          h3 {
            text-align: start;
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
            max-width: 640px;
          }
          span h2 {
            max-width: 640px;
          }
        }
        @media only screen and (min-width: 990px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 862px;
          }
          span h2 {
            max-width: 862px;
          }
        }

        @media only screen and (min-width: 1200px) {
          span h2 {
            max-width: 1072px;
            font-size: 32px;
          }
          .buttom {
            margin-right: 45px;
          }
          h3 {
            font-size: 28px;
          }
          .container {
            max-width: 1072px;
          }
          article {
            flex-direction: row;
          }

          .buttom:hover {
            background-color: transparent;
            color: #2c3e50;
            border: 2px solid #2c3e50;
          }
          .text {
            width: 700px;
          }
          .figure {
            width: 400px;
          }
        }
        @media only screen and (min-width: 1600px) {
          span h2 {
            max-width: 1200px;
          }
          .container {
            max-width: 1200px;
          }
        }
      `}</style>
    </>
  );
}
