import link from "next/link";

const index = (props) => {
  return (
    <>
      <div className="TablaContenido">
        <div className="title">
          <strong>Contenido del artículo</strong>
        </div>
        <ul>
          {props.contenido.map((item) => (
            <li key={item.id}> 
              <a href={"#" + item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        * {
          margin: 0px;
          padding: 0px;
        }

        .TablaContenido {
          display: none;
        }

        @media only screen and (min-width: 1920px) {
          .TablaContenido {
            display: block;
            position: fixed;
            right: 44px;
            max-width: 250px;
            margin-top: 1.5em;
            padding: 5px;
            border-radius: 15px;
            background-color: #ffffff;
          }
          .title {
            text-align: center;
            margin-bottom: 5px;
          }
          strong {
            font-size: 14px;
            margin-bottom: 0.5em;
          }

          ul li {
            list-style: none;
            padding: 8px;
            font-size: 12px;
            font-weight: 600;
          }

          a {
            color: #000000;
            text-decoration: none;
          }
          
          a:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default index;
