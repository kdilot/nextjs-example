import '../styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import Wrapper from 'components/wrapper';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <Component {...pageProps} />
            </Wrapper>
        </>
    );
};

export default MyApp;
