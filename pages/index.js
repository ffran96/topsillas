import React from "react";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { Categories, ArticulosRecomendados, SEO } from "/components/Imports";

export default function Home({ categories, recommendedArticles }) {
  return (
    <>
      <SEO
        url=""
        title="Las mejores reseñas y comparativas sobre silla"
        description="Las mejores ofertas, precios y chollos los encontrarás en Top Sillas. Todo lo que quieras saber sobre la silla que buscas lo tienes en Topsillas.info"
        img="https://www.topsillas.info/_next/image?url=https%3A%2F%2Fwp.topsillas.info%2Fwp-content%2Fuploads%2F2022%2F11%2Fsillas-gaming.jpg&w=256&q=75"
        width="240"
        height="240"
      />
      <Categories props={categories} />
      <ArticulosRecomendados props={recommendedArticles} />
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

  const GET_RECOMMENDED_ARTICLES = gql`
    query getRecommendedArticles {
      posts(first: 10) {
        nodes {
          title
          slug
          id
          categories {
            nodes {
              name
              slug
            }
          }
          excerpt
          acfArticulo {
            cabecera {
              portada {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  `;

  const secondResponse = await client.query({
    query: GET_RECOMMENDED_ARTICLES,
  });
  const recommendedArticles = secondResponse?.data?.posts?.nodes;

  return {
    props: {
      categories,
      recommendedArticles,
    },
    revalidate: 60, // In seconds
  };
}
