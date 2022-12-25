import Link from "next/link";

export default function index(props) {
  return (
    <>
      <div className="migas">
        <Link href="/">
          <a>Inicio</a>
        </Link>
        {" "}/{" "}
        <Link href={props.categoryURL} passHref>
          <a>{props.category}</a>
        </Link>{" "}
        / <span className="select"> {props.article}</span>
      </div>
      <style jsx>{`
        .migas {
          padding: 1em;
          font-size: 10.5px;
          font-weight: 600;
        }
        .migas a {
          text-decoration: none;
          color: #303030;
        }
        .migas a:hover {
          text-decoration: underline;
        }
        .select{
          font-weight: bold;
          color: #2c3e50;
          cursor: pointer;
        }
        @media only screen and (min-width: 768px) {
          .migas {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
