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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
