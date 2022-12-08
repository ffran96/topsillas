import React from "react";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { Categories, ArticulosRecomendados, SEO } from "/components/Imports";

export default function Home({ categories }) {
  return (
    <>
      <SEO
        url=""
        title="Las mejores reseñas y comparativas sobre sillas"
        description="Las mejores ofertas, precios y chollos los encontrarás en Top Sillas 🔥 TODO lo que quieras saber sobre la silla que buscas lo tienes en Topsillas.info"
        img="https://www.topsillas.info/_next/image?url=https%3A%2F%2Fwp.topsillas.info%2Fwp-content%2Fuploads%2F2022%2F11%2Fsillas-gaming.jpg&w=256&q=75"
        width="240"
        height="240"
      />
      <Categories props={categories} />
      <ArticulosRecomendados />
    </>
  );
}

export async function getStaticProps() {
  const GET_CATEGORIES = gql`
    query Categories {
      pages {
        nodes {
          acfImagen {
            imagen {
              sourceUrl
              altText
              mediaDetails {
                height
                width
              }
            }
          }
          title
          slug
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_CATEGORIES,
  });
  const categories = response?.data?.pages?.nodes;

  return {
    props: {
      categories,
    },
    revalidate: 10, // In seconds
  };
}
