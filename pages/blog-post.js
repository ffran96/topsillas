import SEO from "/components/SEO";
import React from "react";
import Navbar from "/components/Navbar";

const index = () => {
  return (
    <>
        <SEO
          title="Blog | TopSillas"
          description="¡Encuentra tu silla ideal al mejor precio y calidad!"
        />

      <Navbar />
      <h1>blog post</h1>

      <style jsx>{`
        
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
            background-color: #ebedef;

        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default index;
