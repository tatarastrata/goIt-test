import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import '../styles/index.scss';
import React from 'react';
import { ErrorBoundary, Layout } from '../components';
import { RequestContextProvider } from '../contexts/request-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ErrorBoundary>
        <RequestContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RequestContextProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default MyApp;
