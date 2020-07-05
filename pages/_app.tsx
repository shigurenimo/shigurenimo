import { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'
import '../styles/index.css'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <main className={'col-span-12 mx-auto max-w-screen-lg w-full'}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
