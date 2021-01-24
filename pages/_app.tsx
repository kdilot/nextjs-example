import '../styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import wrapper from 'src/store';

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

export default wrapper.withRedux(MyApp);
