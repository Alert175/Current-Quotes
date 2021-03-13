import Head from 'next/head'
import '../styles/template.scss'
import '../styles/reset.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name = "viewport" content = "width = device-width, initial-scale = 1" /> 
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Current-Quotes</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/1.png"
          rel="icon"
          type="image/png"
          sizes="48x48"
        />
        <link
          href="/icons/2.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
        <link href="/bootstrap/bootstrap.min.css" rel="stylesheet"></link>
        <script async src="/bootstrap/bootstrap.bundle.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
