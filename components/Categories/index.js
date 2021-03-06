import { CategoriasBox } from "/components/Imports";
import { CategoyData } from "../../data/home";
import { URL, SRC, ALT } from "../../Functions";

const index = () => {
  return (
    <>
      <span>
        <h1>Categorías recomendadas por TopSillas</h1>
      </span>
      <div className="container">
        {CategoyData.map(({id, title, width, height}) => (
          <CategoriasBox
            key={id}
            link={URL(title)}
            src={SRC(title)}
            alt={ALT(title)}
            title={title}
            width={width}
            height={height}
          />
        ))}
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1em;
          max-width: 320px;
          margin: auto;
          margin-top: 1em;
        }

        .box {
          background-color: white;
          border-radius: 15px;
          height: 300px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          flex-direction: column;
          box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .box:hover {
          transform: scale(1.02);
          filter: opacity(75%);
        }

        .image {
          margin: auto;
        }

        .title-box {
          margin: 0 0 10px 10px;
        }
        span h1 {
          max-width: 320px;
          margin: auto;
          margin-top: 0.7em;
          font-size: 24px;
        }

        @media only screen and (min-width: 600px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 472px;
          }
          span h1 {
            max-width: 472px;
            font-size: 32px;
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 640px;
          }
          span h1 {
            max-width: 640px;
            font-size: 32px;
          }
        }

        @media only screen and (min-width: 990px) {
          .container {
            grid-template-columns: repeat(3, 1fr);
            max-width: 862px;
          }
          span h1 {
            max-width: 862px;
            font-size: 32px;
          }
        }

        @media only screen and (min-width: 1200px) {
          .container {
            grid-template-columns: repeat(3, 1fr);
            max-width: 1072px;
            margin: auto;
            margin-top: 1em;
          }
          span h1 {
            max-width: 1072px;
            font-size: 32px;
          }
        }

        @media only screen and (min-width: 1600px) {
          .container {
            grid-template-columns: repeat(4, 1fr);
            max-width: 1200px;
          }
          span h1 {
            max-width: 1200px;
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
};

export default index;


