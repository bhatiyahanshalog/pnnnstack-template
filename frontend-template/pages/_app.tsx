import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Script
    id="stripe-js"
    src="../node_modules/flowbite/dist/flowbite.js"
  />
  <Component {...pageProps} />
</>
}

export default MyApp
