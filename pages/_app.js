import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { Navbar, Footer } from "/components/Imports";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics measurementId="G-FJ4E81T7VQ" />
      <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
