import React from "react";
import { client } from "/lib/apollo";
import { gql } from "@apollo/client";
import {
  SEO,
  Conclusiones,
  Cabecera,
  Buttom,
  TopBox,
  TablaContenido,
  Migas,
  Container,
  ContainerTop,
} from "/components/Imports";

export default function Articulo({ post, slugs }) {
  const p = post.postBy;

  return (
    <>
      <SEO
        url={slugs.categoria + "/" + slugs.post}
        title={p.title}
        description="En este artículo podrás encontrar las mejores sillas gaming del mercado por menos de 100 euros."
        img="https://www.topsillas.info/_next/image?url=%2Fsilla-gaming.jpg&w=256&q=75"
        width="644"
        height="1109"
      />
      {/*        <TablaContenido contenido={Contenido} />
       */}
      <Container>
        <Migas
          category={"Category"}
          categoryURL={"/" + slugs.categoria}
          article={p.title}
        />
        <Cabecera
          key={p.id}
          title={p.title}
          titleId={p.id}
          img={p.acfArticulo.cabecera.portada.mediaItemUrl}
          text={p.acfArticulo.cabecera.introduccion}
          width={478.4}
          height={268.4}
        />

        {p.acfArticulo.top.map((i, index) => (
          <ContainerTop key={index}>
            <TopBox
              title={i.titulo}
              titleId={i.titulo}
              img={i.imagenDelTop.sourceUrl}
              width={256}
              height={434}
              url={i.boton.enlace}
              text={i.contenidoDelTop}
            />
            <Conclusiones
              key={index}
              vtg={i.ventajasYDesventajas.ventajas}
              dtg={i.ventajasYDesventajas.desventajas}
            />
            <Buttom url={i.boton.enlace} label={i.boton.label} />
          </ContainerTop>
        ))}
        <div dangerouslySetInnerHTML={{ __html: p.acfArticulo.veredicto }} />
        <div dangerouslySetInnerHTML={{ __html: p.acfArticulo.otros }} />
      </Container>
    </>
  );
}
export async function getStaticPaths() {
  const GET_ALL_SLUGS = gql`
    query getSlugs {
      posts {
        nodes {
          slug
          categories {
            nodes {
              slug
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_ALL_SLUGS,
  });

  const slugs = response?.data?.posts?.nodes;

  const paths = slugs.map(({ slug, categories }) => {
    return {
      params: {
        category: categories.nodes[0].slug,
        post: slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const slugs = {
    categoria: params.category,
    post: params.post,
  };

  const GET_ARTICLE_BY_SLUG = gql`
    query getArticleBySlug(
      $slug: String = "${params.post}"
    ) {
      postBy(slug: $slug) {
        acfArticulo {
          cabecera {
            portada {
              altText
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
            introduccion
          }
          top {
            titulo
            imagenDelTop {
              altText
              mediaDetails {
                width
                height
              }
              sourceUrl
            }
            contenidoDelTop
            ventajasYDesventajas {
              ventajas {
                ventaja
              }
              desventajas {
                desventaja
              }
            }
            boton {
              label
              enlace
            }
          }
          veredicto
          otros
        }
        categories {
          nodes {
            name
          }
        }
        title
        id
      }
      tags {
        nodes {
          name
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_ARTICLE_BY_SLUG,
  });

  const post = response?.data;

  return {
    props: {
      post,
      slugs,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
