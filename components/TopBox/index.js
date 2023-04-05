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
              src={props.img}
              alt={props.img}
              width={props.widthTop}
              height={props.heightTop}
            />
          </div>
        </a>
        <div
          className="top-text"
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
      </div>

      <style jsx>{`
        h2 a {
          color: #000000;
          text-decoration: none;
        }

        h2 a:hover {
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
            max-width: 1000px;
            margin: auto;
            justify-content: center;
            align-items: center;
          }
          .top-image {
            float: left;
            min-width: 320px;
          }

          h2{
            font-size: 26px;
          }

          .top-text {
          }
        }
      `}</style>
    </>
  );
};

export default index;
