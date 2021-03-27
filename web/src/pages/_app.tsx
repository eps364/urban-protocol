import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'



export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_NAME}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Component {...pageProps} />

        </>
    );
}

export async function getStaticProps() {
    
}