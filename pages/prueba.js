import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const URL = "https://wp.topsillas.info/wp-json/wp/v2/pages/";

export default function Hola() {
  const [results, setResults] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [HandelClick, setHandelClick] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setResults({ data }))
      .finally(() => setIsLoading(false));
  }, []);

  const { data } = results;

  return (
    <>
      {IsLoading ? (
        <h1>Cargando...</h1>
      ) : (
        data.map(({ id, title, slug }) => (
          <div key={id}>
                {HandelClick ? <p>Ok!</p> : <p>Nop!</p>}
            <Link href={`/${slug}`}>
              <a>
                <Image
                  src={`https://wp.topsillas.info/wp-content/uploads/2022/11/${slug}.jpg`}
                  alt={"silla gaming"}
                  width={250}
                  height={250}
                />
                <h2>{title.rendered}</h2>
              </a>
            </Link>
            <button onClick={() => setHandelClick(!HandelClick)}>
              Click me
            </button>
          </div>
        ))
      )}

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
}
