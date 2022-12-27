import Image from "next/image";
import DateAuthor from "/components/DateAuthor";

const index = (props) => {
  return (
    <>
      <div className="container">
        <h1 id={props.titleId}>{props.title}</h1>
        <div className="cabecera">
          <div className="figure">
            <Image
              src={props.img}
              alt={props.img}
              width={props.width}
              height={props.height}
            />
            <div className="caption">
              <DateAuthor
                dateTime={props.dateTime}
                date={props.date}
                nameAvatar={props.nameAvatar}
                authorAvatar={props.authorAvatar}
              />
            </div>
          </div>
          <div
            className="cabecera-texto"
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        </div>
      </div>
      <style jsx>{`
        .figure {
          max-width: 478.4px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.1em;
          margin: auto;
        }
        h1 {
          text-align: center;
          text-transform: uppercase;
        }
        .cabecera {
          margin-bottom: 2.5em;
        }

        @media only screen and (min-width: 1200px) {
          .container {
            padding: 0em 6em;
          }
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
