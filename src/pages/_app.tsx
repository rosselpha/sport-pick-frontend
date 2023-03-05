import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react' 
import { Analytics } from '@vercel/analytics/react'

import Layout from '@/components/layout'



export default function App({ Component, pageProps }: AppProps) {

  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
      <script src="https://my.rtmark.net/p.js?f=sync&lr=1&partner=23abd509f4776f8c0a915922778aac1d10dafe702e11e8827e181e149c39f128" defer></script>
      <noscript><img src="https://my.rtmark.net/img.gif?f=sync&lr=1&partner=23abd509f4776f8c0a915922778aac1d10dafe702e11e8827e181e149c39f128" width="1" height="1" /></noscript>
    </SessionProvider>

  )
}
