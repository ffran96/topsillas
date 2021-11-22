import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
           {<script src="//code.tidio.co/0hn08jrcy35fv4bk5o2pzwrv6ins4s0x.js" async></script>}
        </body>
      </Html>
    )
  }
}

export default MyDocument