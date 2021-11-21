import Link from "next/link"

export default function index() {
  return (
    <>
      <div className="container">
          <ul>
              <li><Link href="/"><a>Inicio</a></Link></li>
              <li><Link href="/sillas-gamers"><a>Categorías</a></Link></li>
              <li><Link href="/sillas-gamers/mejores-sillas-gaming-por-menos-de-100-euros"><a>Marcas</a></Link></li>
             
          </ul>
      </div>

      <style jsx>
        {`
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
          .container {
            position: sticky;
            top: 65px;
            z-index:10;
            border-top: 3px solid #323232;
            width: 100%;
            background-color: #171717FC;
            color: white;
            padding: 1em;
          }

          .container ul{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            }

          .container ul li{
            list-style: none;
            justify-content: space-between;
            padding: 0.8em;
 
          }

          a{
              color: white;
              text-decoration: none;
              font-size: 20px;
              font-weight: bold;
              padding: 0.5em 6em;
          }
        `}
      </style>
    </>
  );
}
