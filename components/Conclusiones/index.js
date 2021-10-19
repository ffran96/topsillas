const index = (props) => {
  return (
    <>
      <div className="conclusiones">
        <div className="ventajas">
          <div>
            {" "}
            <strong>VENTAJAS 💚</strong>{" "}
          </div>
          <ul>
            {props.vtg.map((vtg) => (
              <li>💚 {vtg}.</li>
            ))}
          </ul>
        </div>

        <div className="desventajas">
          <div>
            {" "}
            <strong>DESVENTAJAS 💔</strong>{" "}
          </div>
          <ul>
            {props.dtg.map((dtg) => (
              <li>💔 {dtg}.</li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`

        *{
          padding: 0;
        }
        .conclusiones {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ventajas {
          margin-top: 2em;
          background-color: #d5f5e3;
          border-radius: 15px;
          padding: 15px;
          width: 320px;
        }
        .ventajas ul li {
          list-style: none;
          padding: 8px;
          padding-left: 1em;
          font-weight: 600;
        }

        .desventajas div {
          text-align: center;
          font-size: 1.2em;
        }

        .desventajas {
          margin-top: 2em;
          background-color: #fadbd8;
          border-radius: 15px;
          padding: 15px;
          width: 320px;
        }
        .desventajas ul li {
          list-style: none;
          padding: 8px;
          padding-left: 1em;
          font-weight: 600;
        }

        .ventajas div {
          text-align: center;
          font-size: 1.2em;
        }

        @media only screen and (min-width: 1200px) {
          .conclusiones {
            flex-direction: row;
            gap: 4em;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 2.5em;
          }
        }
      `}</style>
    </>
  );
};

export default index;
