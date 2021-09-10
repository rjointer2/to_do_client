
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head>
            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <link rel="icon" href="/icon.png"></link>
            <meta name="theme-color" content="#fff" />
            <title>To Do App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;