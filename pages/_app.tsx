import '../styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
