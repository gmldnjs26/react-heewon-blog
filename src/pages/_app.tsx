import styled from 'styled-components';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

type AppProps<P = any> = {
  pageProps: P;
  emotionCache?: EmotionCache;
} & Omit<NextAppProps<P>, 'pageProps'>;

import 'src/styles/reset.scss';
import 'src/styles/common.scss';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

const SC = {
  App: styled.div`
    background: #f5f6f6;
    height: 100vh;
  `,
  Container: styled.div`
    max-width: 1000px;
    margin: auto;
    width: 100%;
  `,
};

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppProps<any>) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SC.App>
          <Header />
          <SC.Container>
            <Navigation styles={{ my: '16px' }} />
            <Component {...pageProps} />
          </SC.Container>
        </SC.App>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;