import Items from "./Items";
import React, {useState} from "react"

export default function index() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  return (
    <>
      <div onClick={handleClick} className={click ? "container" : "container"}>
        <div className="categorias">
          <div className="col">
            <ul>
              <li>Sillas gaming</li>
              <li>Sillas de oficina</li>
              <li>Sillas de exterior</li>
              <li>Sillas de comedor</li>
              <li>Sillones de masaje</li>
              <li>Taburetes</li>
              <li>Puffs</li>
              <li>Mecedoras</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Cochecitos bugaboo</li>
              <li>Sillas de coche</li>
              <li>Sillas de paseo</li>
              <li>Tronas</li>
              <li>Cunas</li>
              <li>Cunas de viaje</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            display: block;
            z-index: 100;
            border-top: 3px solid #1f1f1f;
            background-color: #000000e6;
          }
          .hide-container{
            display: none;
          }
          .categorias {
            display: flex;
            justify-content: space-around;
            max-width: 900px;
            padding: 2em;
            margin: auto;
          }
          .col ul li {
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            padding: 0.5em;
            list-style: none;
          }
          .col ul li:hover {
            cursor: pointer;
            background-color: #ffffff1a;
          }
        `}
      </style>
    </>
  );
}
