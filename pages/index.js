import React from "react";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { Categories, ArticulosRecomendados, SEO } from "/components/Imports";

export default function Home({ categories }) {
  return (
    <>
      <SEO
        url="sillas-gamers/mejores-sillas-gaming-por-menos-de-100-euros"
        title="Inicio"
        description="En este artículo podrás encontrar las mejores sillas gaming del mercado por menos de 100 euros."
        img="https://www.topsillas.info/_next/image?url=%2Fsilla-gaming.jpg&w=256&q=75"
        width="644"
        height="1109"
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
