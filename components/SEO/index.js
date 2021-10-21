import Head from "next/head";

const index = (props) => {
  return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{props.title} | TopSillas</title>
        <meta name="description" content={props.description} />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  );
};

export default index;
