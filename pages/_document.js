import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="logo.png" />
        </Head>
        <body>
          <div className="bodyContainer">
            <Main />
            <NextScript />
            <link
              rel="stylesheet"
              href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
              integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
              crossOrigin="anonymous"
            />
            <script src="https://kit.fontawesome.com/28179b0d71.js"></script>
          </div>
        </body>
      </Html>
    );
  }
}
