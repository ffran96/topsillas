import React from "react";
import { client } from "/lib/apollo";
import { gql } from "@apollo/client";
import { Container, ArticlesComp, SEO, Migas } from "/components/Imports";
import { slugToTitle } from "/Functions";

export default function Articulos({ articles, slug_category }) {
  return (
    <>
      <Container>
        <Migas
          category={"Category"}
          categoryURL={"/" + slug_category}
          article={""}
        />
        <SEO
          url={slug_category}
          title={slugToTitle(slug_category)}
          description="En este artículo podrás encontrar las mejores sillas gaming del mercado por menos de 100 euros."
          img="https://www.topsillas.info/_next/image?url=%2Fsilla-gaming.jpg&w=256&q=75"
          width="644"
          height="1109"
        />
        <ArticlesComp Data={articles} Category={slug_category} />
        {/*
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
         */}
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { category: "sillas-gaming" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const GET_CATEGORIES = gql`
    query Categories {
      pages {
        nodes {
          slug
        }
      }
    }
  `;

  const res = await client.query({
    query: GET_CATEGORIES,
  });

  const categories = res?.data?.pages?.nodes;

  const GET_ARTICLES = gql`
  query ArticlesByCategory {
    posts(where: {categoryName: "${params.category}"}) {
      nodes {
        id
        title
        excerpt
        slug
        content
        acfArticulo {
          cabecera {
            portada {
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
  }
`;

  const response = await client.query({
    query: GET_ARTICLES,
  });
  const articles = response?.data?.posts?.nodes;
  const slug_category = params.category;

  return {
    props: {
      articles,
      categories,
      slug_category,
    },
    revalidate: 10, // In seconds
  };
}
