import React from 'react';
import PropTypes from 'prop-types';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import RolesProvider from '../context/RolesContext';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
//import '../styles/globals.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <RolesProvider>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </RolesProvider>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export async function getStaticProps() {}

export async function getInitialProps() {}
