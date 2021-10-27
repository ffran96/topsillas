const index = (props) => {
  return (
    <>
      <div className="TablaContenido">
        <div className="title">
          <strong>Contenido del artículo</strong>
        </div>
        <ul>
          {props.contenido.map((contenido) => (
            <a href={'#' + contenido.url}>
              <li>{contenido.title}</li>
            </a>
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

        @media only screen and (min-width: 1200px) {
          .TablaContenido {
            display: block;
            position: fixed;
            right: 44px;
            max-width: 250px;
            margin-top: 1.5em;
            padding: 5px;
            border-radius: 15px;
            background-color: #FFFFFF;
          }
          .title {
            text-align: center;
            margin-bottom: 5px;
          }
          strong {
            font-size: 14px;
            margin-bottom: 0.5em;
          }
          a {
            color: #000000;
            text-decoration: none;
          }

          ul li {
            list-style: none;
            padding: 8px;
            font-size: 12px;
            font-weight: 600;
          }

          ul li:hover {
            background-color: #0000001a;
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
  )
}

export default index
