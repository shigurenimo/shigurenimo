import { GetServerSideProps } from 'next'
import { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'
import '../styles/index.css'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <header className={'py-4 sticky bg-white top-0 col-span-12'}>
        {'reiwa.now.sh'}
      </header>
      <main className={'col-span-12 mx-auto max-w-screen-lg w-full'}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
