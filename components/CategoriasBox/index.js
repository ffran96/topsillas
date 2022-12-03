import Link from "next/link";
import Image from "next/image";

const index = (props) => {
  return (
    <>
      <Link href={"/[category]"} as={props.link}>
        <a>
          <div className="box">
            <div className="image">
              <Image
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}
              />
            </div>
            <div className="title-box">
              <strong>{props.title}</strong>
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        a {
          color: #000000;
          text-decoration: none;
        }
        .box {
          background-color: #ffffff;
          border-radius: 15px;
          height: 300px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          flex-direction: column;
          box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
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
        }

        @media only screen and (min-width: 768px) {
        }

        @media only screen and (min-width: 990px) {
        }

        @media only screen and (min-width: 1200px) {
        }

        @media only screen and (min-width: 1600px) {
        }
      `}</style>
    </>
  );
};

export default index;
