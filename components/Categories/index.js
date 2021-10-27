import CategoriasBox from "/components/CategoriasBox";
import { CategoyData, numItems } from "../../data/home";

const index = () => {
  return (
    <>
      <span>
        <h1>Categorías recomendadas por TopSillas</h1>
      </span>
      <div className="container">
        {numItems.map((numItems, index) => (
          <CategoriasBox
            link={CategoyData[index].link}
            src={CategoyData[index].src}
            alt={CategoyData[index].alt}
            title={CategoyData[index].title}
            width={CategoyData[index].width}
            height={CategoyData[index].height}
          />
        ))}
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1em;
          margin: 2em 40px 2em 40px;
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

        @media only screen and (min-width: 600px) {
          .container {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media only screen and (min-width: 990px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media only screen and (min-width: 1200px) {
          .container {
            grid-template-columns: repeat(3, 1fr);
            margin-left: 150px;
            margin-right: 150px;
          }
          span h1{
            max-width: 1400px;
            margin: auto;
            margin-top: 1em;
          }
        }

        @media only screen and (min-width: 1600px) {
          .container {
            grid-template-columns: repeat(4, 1fr);
            margin-left: 250px;
            margin-right: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default index;
