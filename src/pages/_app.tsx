import Head from 'next/head';
import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { Navbar, ScrollToTopButton, Footer } from '../components/utils';

const App = ({ Component, pageProps }: AppProps) => (

    <div className="root">
        <Head>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#0761e2" />
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

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
                content="/img/image4.png"
            />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <ScrollToTopButton />
        <Footer />
    </div>
);

export default App;
