import React, { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    scrollTo(0, 0);
  });

  return (
    <>
      <div className="dropdown-container">
        <nav>
          <ul>
            <li>Uso</li>
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
          justify-content: space-evenly;
          list-style: none;
        }
        .dropdown-container nav ul li {
          color: white;
          font-size: 34px;
        }
      `}</style>
    </>
  );
}
