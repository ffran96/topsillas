import React, { useEffect, useState } from "react";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Desplegable = () => (
  <>
    <ul>
      <li>Comedor</li>
      <li>Oficina</li>
      <li>Gaming</li>
      <li>Puffs</li>
    </ul>

    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      ul {
        margin-top: 0.5em;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
      }
      li {
        font-size: 24px;
        font-weight: 400;
      }
    `}</style>
  </>
);

export default function Index() {
  const [HandleClick, setHandleClick] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="dropdown-container">
        <nav>
          <ul>
            <li>
              <div
                onClick={() => setHandleClick(!HandleClick)}
                className="btn-label-icon-menu"
              >
                <div className="label">Uso</div>
                <div className="icon" style={{ marginTop: "3px" }}>
                  <FontAwesomeIcon
                    icon={HandleClick ? faAngleUp : faAngleDown}
                  />
                </div>
              </div>
              {HandleClick && <Desplegable />}
            </li>
            <li>Estancias</li>
            <li>Material</li>
            <li>Diseño</li>
            <li>Marcas</li>
          </ul>
        </nav>
      </div>

      <style global jsx>{`
        body {
          overflow-y: hidden;
        }
      `}</style>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        .dropdown-container {
          display: flex;
          background-color: #2c3e50;
          position: absolute;
          justify-content: center;
          width: 100%;
          height: 100%;
          z-index: 10;
        }
        .dropdown-container nav ul {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5em;
          list-style: none;
        }
        .btn-label-icon-menu {
          display: flex;
          height: 100%;
          align-items: center;
          gap: 0.3em;
        }
        .dropdown-container nav ul li {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          display: flex;
          color: white;
          font-size: 28px;
          cursor: pointer;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
