import Image from "next/image";
import Link from "next/link";

export default function index(props) {
  return (
    <>
      {props.Data.map((item) => (
          <div key={item.id} className="container">
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
              <h3>{item.title}</h3>
                {item.text}
                <Link href={item.link}>
                  <a>
                    <div className="buttom"> Leer más</div>
                  </a>
                </Link>
              </div>
            </article>
          </div>
      ))}

      <style jsx>{`
      *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
        .container {
          max-width: 320px;
          margin: auto;
          margin-bottom: 2em;
          margin-top: 1em;
        }
        article {
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .figure {
          overflow: hidden;
        }
        .text {
          max-width: 700px;
          margin: 16px;
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
          h3{
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
