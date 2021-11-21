import Head from "next/head";

export default function index(props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.title} | TopSillas</title>
      <meta name="description" content={props.description} />
      <meta name="theme-color" content="#000000E6" />
      <meta name="google-site-verification" content="kemFhMXigsPX2nbXARC9C_mgBc9n0W9PQjXvTzM2kV4" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossorigin="anonymous"
      />
    </Head>
  );
}
