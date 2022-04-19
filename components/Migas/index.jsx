import Link from "next/link";

export default function index(props) {
  return (
    <>
      <span className="migas">
        <Link href="/">
          <a>Inicio</a>
        </Link>{" "}
        /{" "}
        <Link href={props.categoryURL}>
          <a>{props.category}</a>
        </Link>{" "}
        /{" "}
        <Link href="">
          <a>{props.article}</a>
        </Link>
      </span>
      <style jsx>{`
      .migas {
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
      @media only screen and (min-width: 768px) {
        .migas {
            font-size: 14px;
          }
      }
      
      `}</style>
    </>
  );
}
