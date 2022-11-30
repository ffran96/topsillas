import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { Navbar, Footer } from "/components/Imports";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
