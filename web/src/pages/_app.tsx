import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import Layout from '../components/Layout';
//import 'tailwindcss/tailwind.css'
import { RolesProvider} from '../context/RolesContext'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_NAME}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <RolesProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RolesProvider>
        </>
    );
}

export async function getStaticProps() {

}