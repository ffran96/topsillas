import Image from "next/image";

const index = (props) => {
  return (
    <>
      <a href={props.url} rel="nofollow noreferrer" target="_blank">
        <h2 id={props.titleId}>{props.title}</h2>
      </a>
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
        <div className="top-text"><p>{props.text}</p></div>
      </div>

      <style jsx>{`
        a {
          color: #000000;
          text-decoration: none;
        }
        p {
          text-align: justify;
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
    </>
  );
};

export default index;
