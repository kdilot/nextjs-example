import '../styles/globals.css'

import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import wrapper from '@store/index'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(MyApp)
