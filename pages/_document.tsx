import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const FONT_URL =
      'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500&display=swap'

    return (
      <Html>
        <Head>
          <link href={FONT_URL} rel={'stylesheet'} />
          <meta content={'noindex'} name={'robots'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
