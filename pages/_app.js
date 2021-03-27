import Head from 'next/head';
import '../styles/template.scss';
// import 'antd/dist/antd.css';

// import mobx
import { observer } from 'mobx-react-lite';

// import store
import theme from '../store/theme';

// import components
import Navbar from '../components/Navbar';
import LowerMenu from '../components/Navbar/LowerMenu';

const MyApp = observer(({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width = device-width, initial-scale = 1"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Current-Quotes</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/1.png" rel="icon" type="image/png" sizes="48x48" />
        <link href="/icons/2.png" rel="icon" type="image/png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Navbar />
      <div
        className="main-wrapper"
        style={{
          backgroundColor: theme.active === 'dark' ? '#2a2a2a' : '#ffffff',
          color: theme.active === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.8)',
          minHeight: '85vh',
          paddingTop: '15vh',
          width: '100%',
        }}
      >
        <Component {...pageProps} />
      </div>
      <LowerMenu />
    </>
  );
});

export default MyApp;
