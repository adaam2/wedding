import Head from 'next/head'

import { GlobalStyle } from '@lib/theme'

function Application({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Lato:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </div>
  )
}

export default Application
