import Head from "next/head";

export default function index(props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <title>{props.title}</title>
      <meta name="description" content={props.description} />

      <link rel="canonical" href={"https://www.topsillas.info/" + props.url} />

      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title + " | TopSillas"} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:url"
        content={"https://www.topsillas.info/" + props.url}
      />
      <meta property="og:site_name" content="Topsillas.info" />

      <meta property="og:image" content={props.img} />
      <meta property="og:image:width" content={props.width} />
      <meta property="og:image:height" content={props.height} />

      <meta name="theme-color" content="#000000" />
    </Head>
  );
}
