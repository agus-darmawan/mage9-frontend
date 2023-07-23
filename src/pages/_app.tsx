import { AppProps } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { RecoilRoot } from 'recoil'

import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'

import Loading from '@/components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    setLoading(true)
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    setLoading(false)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <RecoilRoot>
      {loading ? (
        <Loading />
      ) : (
        <ThemeProvider attribute='class'>
          <Component {...pageProps} />
          <ToastContainer />
        </ThemeProvider>
      )}
    </RecoilRoot>
  )
}

export default MyApp
