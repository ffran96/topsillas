import React from "react";
import { client } from "/lib/apollo";
import { gql } from "@apollo/client";
import { Container, ArticlesComp, SEO, Migas } from "/components/Imports";

export default function Articulos({ postResume }) {
  return (
    <>
      <Container>
        <Migas
          category={postResume[0].categories.nodes[0].name}
          categoryURL={"/" + postResume[0].categories.nodes[0].slug}
          article={""}
        />
        <SEO
          url={postResume[0].categories.nodes[0].slug}
          title={postResume[0].categories.nodes[0].name}
          description="En este artículo podrás encontrar las mejores sillas gaming del mercado por menos de 100 euros."
          img="https://www.topsillas.info/_next/image?url=%2Fsilla-gaming.jpg&w=256&q=75"
          width="644"
          height="1109"
        />
        <ArticlesComp
          Data={postResume}
          Category={postResume[0].categories.nodes[0].slug}
        />
        {/*
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
         */}
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const GET_CATEGORIES = gql`
    query getCategorySlugs {
      pages {
        nodes {
          slug
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_CATEGORIES,
  });

  const categories = response?.data?.pages?.nodes;

  const paths = categories.map(({ slug }) => {
    return {
      params: {
        category: slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
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
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
`;

  const response = await client.query({
    query: GET_ARTICLES,
  });
  const postResume = response?.data?.posts?.nodes;
  const slug_category = params.category;

  return {
    props: {
      postResume,
      slug_category,
    },
    revalidate: 60, // In seconds
  };
}
