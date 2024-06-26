import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="../public/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>GoIt Requests</title>
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
