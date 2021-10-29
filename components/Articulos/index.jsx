import Image from "next/image";
import Link from "next/link";

export default function index(props) {
  return (
    <>
      {props.Data.map((item) => (
        <Link href={item.link}>
          <div className="container">
            <h2>{item.title}</h2>
            <article>
              <div className="figure">
                <Image
                  src={"/" + item.src + ".jpg"}
                  alt={item.alt}
                  width={598}
                  height={335.5}
                />
              </div>
              <div className="text">
                {item.text}
                <Link href={item.link}>
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
          padding: 0.5em 2em 2em 2em;
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
        h3 {
          font-size: 18px;
        }
        @media only screen and (min-width: 600px) {
          .container {
            grid-template-columns: repeat(1, 1fr);
            max-width: 472px;
          }
          span h2 {
            max-width: 472px;
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
            background-color: #000000e6;
          }
          .figure {
            display: block;
            min-width: 420px;
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
