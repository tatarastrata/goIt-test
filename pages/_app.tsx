import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import '../styles/index.scss';
import React from 'react';
import { Layout } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
