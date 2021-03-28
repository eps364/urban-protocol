import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'
//import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_NAME}</title>
            </Head>
            
            <Component {...pageProps} />

        </>
    );
}

export async function getStaticProps() {
    
}