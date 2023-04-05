import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <>
      <footer>
        <div>
          <hr color="#ECF0F1"></hr>
          <p className="Copy">
            <b>TopSillas.info | Copyright © 2022</b>
          </p>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: #ffffffe6;
          font-size: 14px;
          font-weight: 500;
        }
        .containerr {
          display: none;
        }

        footer {
          bottom: 0;
          background-color: #2c3e50;
        }
        p {
          margin-top: 1.5em;
          color: #ffffff;
          text-align: center;
          padding: 0 0 2em 0em;
        }
        .Copy {
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export default index;
