import React from "react";

export default function FboxSpaceBetween({ children }) {
  return (
    <>
      <div className="migasDateAuthor">{children}</div>
      <style jsx>
        {`
          .migasDateAuthor {
            padding:1em;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
}
