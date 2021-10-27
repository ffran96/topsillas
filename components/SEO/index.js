import Head from "next/head";

export default function index(props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.title} | TopSillas</title>
      <meta name="description" content={props.description} />
      <meta name="theme-color" content="#000000E6" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

