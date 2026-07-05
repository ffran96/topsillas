import React from "react";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import {
  SEO,
  Conclusiones,
  Cabecera,
  Buttom,
  TopBox,
  Migas,
  Container,
  ContainerTop,
  FaqArticulo,
} from "../../components/Imports";

export default function Articulo({ post, slugs }) {
  const p = post.postBy;
  const seoDescription = p.excerpt
    ? p.excerpt.replace(/<[^>]*>/g, "")
    : `Reseña de ${p.title} en Top Sillas`;
  const seoImage =
    p.featuredImage?.node?.sourceUrl ||
    p.acfArticulo?.cabecera?.portada?.mediaItemUrl ||
    "https://www.topsillas.info/logo.png";

  let formattedDate = new Date(p.date).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <>
      <SEO
        url={slugs.categoria + "/" + slugs.post}
        title={`Top Sillas - ${p.title}`}
        description={seoDescription}
        img={seoImage}
        width="250"
        height="250"
      />
      <Container>
        <Migas
          category={p.categories.nodes[0].name}
          categoryURL={"/" + slugs.categoria}
          article={p.title}
        />

        <Cabecera
          key={p.id}
          title={p.title}
          titleId={p.id}
          img={p.acfArticulo.cabecera.portada.mediaItemUrl}
          text={p.acfArticulo.cabecera.introduccion}
          width={500}
          height={300}
          dateTime={p.date}
          date={formattedDate}
          nameAvatar={p.author.node.name}
          authorAvatar={p.author.node.avatar.url}
        />

        {p.acfArticulo.top.map((i, index) => (
          <ContainerTop key={index}>
            <TopBox
              title={i.titulo}
              titleId={i.titulo}
              img={i.imagenDelTop.sourceUrl}
              alt={i.imagenDelTop.altText}
              widthTop={i.imagenDelTop.mediaDetails.width}
              heightTop={i.imagenDelTop.mediaDetails.height}
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

        <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div
            className="article-content rounded-lg border border-border bg-card p-5 shadow-sm sm:p-7"
            dangerouslySetInnerHTML={{ __html: p.acfArticulo.veredicto }}
          />
        </section>

        <FaqArticulo items={p.acfArticulo.otros} />
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
    fallback: "blocking",
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
          otros {
            pregunta
            respuesta
          }
        }
        categories {
          nodes {
            name
          }
        }
        excerpt
        title
        date
        id
        author {
          node {
            avatar {
              url
            }
          name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
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

  if (post.postBy === null) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        post,
        slugs,
      },
      revalidate: 60,
    };
  }
}
