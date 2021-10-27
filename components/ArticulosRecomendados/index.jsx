import Image from "next/image";
import Link from "next/link";
import {
  CabeceraText,
  img,
  title,
  numItems,
  link,
} from "../../data/ArticulosRecomendados";

export default function index() {
  return (
    <>
      <span>
        <h2>Artículos recomendados</h2>
      </span>

      {numItems.map((numItems, index) => (
        <Link href={"/posts/" + link[index]}>
          <div className="container">
            <h2>{title[index]}</h2>
            <article>
              <div className="figure">
                <Image
                  src={"/" + img[index].src + ".jpg"}
                  alt={img[index].alt}
                  width={598}
                  height={335.5}
                />
              </div>
              <div className="text">
                {CabeceraText[index]}
                <Link href={"/posts/" + link[index]}>
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
          padding: 2em;
          margin-bottom: 2em;
          margin-top: 1em;
          box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }
        article {
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 2em;
          align-items: start;
          margin-buttom: 200px;
          margin-buttom: 2em;
          cursor: pointer;
        }
        .figure {
          display: none;
        }
        .text {
          max-width: 700px;
        }
        .buttom {
          float: right;
          padding: 1em;
          background-color: #000000;
          color: #ffffff;
          font-weight: 700;
          width: 100px;
          text-align: center;
          border-radius: 49px;
          cursor: pointer;
        }

        a {
          color: #000000;
          text-decoration: none;
        }
        span h2 {
          max-width: 320px;
          margin: auto;
          margin-top: 1.5em;
          font-size: 22px;
        }
        @media only screen and (min-width: 1200px) {
          span h2 {
            max-width: 1400px;
            font-size: 32px;
          }
          .container {
            max-width: 1450px;
          }
          article {
            flex-direction: row;
          }
          .figure {
            display: block;
          }
    
          .buttom:hover {
            background-color: #000000e6;
          }
        }
      `}</style>
    </>
  );
}
