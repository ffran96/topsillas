import Image from "next/image";

const index = (props) => {
  return (
    <>
      <h1 id={props.titleId}>{props.title}</h1>
      <div className="cabecera">
        <div className="figure">
          <Image
            src={"/" + props.img + ".jpg"}
            alt={props.img}
            width={598}
            height={335.5}
          />
        </div>
        <div className="cabecera-texto">{props.text}</div>
      </div>

      <style jsx>{`
        p {
          text-align: justify;
        }

        h1 {
          text-align: center;
        }
        .cabecera {
          margin-bottom: 2.5em;
        }

        @media only screen and (min-width: 1200px) {
          h1 {
            font-size: 52px;
          }
          .cabecera {
            display: flex;
            justify-content: center;
            gap: 2em;
            margin-bottom: 3.5em;
          }

          .cabecera-texto {
            max-width: 550px;
          }

          .figure {
            margin-top: 1.3em;
          }
        }
      `}</style>
    </>
  );
};

export default index;
