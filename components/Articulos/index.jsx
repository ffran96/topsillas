import Image from "next/image";
import Link from "next/link";

export default function index(props) {
  return (
    <>
      {props.Data.map((item) => (
        <Link href={item.link} key={item.id}>
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
              </div>
            </article>
                <Link href={item.link}>
                  <a>
                    <div className="buttom"> Leer más</div>
                  </a>
                </Link>
          </div>
        </Link>
      ))}

      <style jsx>{`
        .container {
          max-width: 320px;
          margin: auto;
          background-color: #ffffff;
          border-radius: 15px;
          margin-top: 1em;
          cursor: pointer;
          position: relative;

        }
        article {
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 2em;
          align-items: center;
          cursor: pointer;
        }
        .figure {
          display: none;
        }
        .text {
          max-width: 700px;
        }
        .buttom {
          position: absolute;
          right: 20px;
          padding: 1em;
          background-color: #000000;
          color: #ffffff;
          font-weight: 700;
          width: 100px;
          text-align: center;
          border-radius: 49px;
          cursor: pointer;
          margin-bottom: 50em;
        }

        a {
          color: #000000;
          text-decoration: none;
        }
        h2 {
          font-size: 18px;
        }
        @media only screen and (min-width: 600px) {
          .container {
            grid-template-columns: repeat(1, 1fr);
            max-width: 472px;
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
            max-width: 640px;
          }
        }
        @media only screen and (min-width: 990px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 862px;
          }
        }

        @media only screen and (min-width: 1200px) {
          h2 {
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
          .container {
            max-width: 1200px;
          }
        }
      `}</style>
    </>
  );
}
