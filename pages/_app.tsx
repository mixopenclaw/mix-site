import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'dark'
    if (saved === 'dark') document.documentElement.classList.add('dark')
  }, [])

  return <Component {...pageProps} />
}
