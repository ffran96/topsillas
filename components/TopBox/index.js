import Image from "next/image";

const index = (props) => {
  return (
    <>
      <h2 id={props.titleId}>
        <a href={props.url} rel="nofollow noreferrer" target="_blank">
          {props.title}
        </a>
      </h2>

      <div className="top-box">
        <a href={props.url} rel="nofollow noreferrer" target="_blank">
          <div className="top-image">
            <Image
              src={"/" + props.img + ".jpg"}
              alt={props.img}
              width={props.width}
              height={props.height}
            />
          </div>
        </a>
        <div className="top-text">{props.text}</div>
      </div>

      <style jsx>{`
        h2 a {
          color: #000000;
          text-decoration: none;
        }

        h2 a:hover{
          text-decoration: underline;
        }

        h2 {
          text-align: center;
        }

        .top-image {
          display: flex;
          justify-content: center;
        }

        @media only screen and (min-width: 1200px) {
          .top-box {
            display: flex;
            max-width: 1000px;
            margin: auto;
            justify-content: center;
            align-items: center;
          }
          .top-image {
            min-width: 320px;
          }

          .top-text {
            max-width: 500px;
          }
        }
      `}</style>
      <style jsx global>{`
        p {
          text-align: justify;
        }
      `}</style>
    </>
  );
};

export default index;
