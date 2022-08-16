import Head from 'next/head';
import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { Navbar } from '../components/utils/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = ({ Component, pageProps }: AppProps) => (

    <div className="root">
      <Head>
          {/*AOS Library*/}
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <meta charSet="utf-8" />
          <meta name="theme-color" content="#00c2cc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Heavy Division</title>

        <meta
            key="description"
            name="description"
            content="Official Heavy Division website, an open-source project providing high quality mods for Microsoft Flight Simulator."
        />
        <meta
            key="og:title"
            name="og:title"
            content="Heavy Division"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Official Heavy Division website, an open-source project providing high quality mods for Microsoft Flight Simulator."
        />
        <meta
            key="og:image"
            name="og:image"
            content="/B78XH_Side.png"
        />
      </Head>
        <Navbar />
      <Component {...pageProps} />
    </div>
);

export default App;
