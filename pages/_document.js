import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="logo.png" />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <div className="bodyContainer">
            <Main />
            <NextScript />
            <script
              defer
              src="https://kit.fontawesome.com/28179b0d71.js"
              crossOrigin="anonymous"
            ></script>
          </div>
        </body>
      </Html>
    );
  }
}
