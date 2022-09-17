import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Topbar from '../components/Topbar/Topbar'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
