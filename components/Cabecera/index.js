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
            width={props.width}
            height={props.height}
          />
        </div>
        <div className="cabecera-texto">{props.text}</div>
      </div>

      <style jsx>{`
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
            margin-bottom: 3.5em;
          }

          .figure {
            float: left;
            padding-right: 30px;
          }

        }
      `}</style>

    </>
  );
};

export default index;
