import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalSyle from '../style/global';
import theme from '../style/theme';

const MyApp: React.FC <AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalSyle />
    </ThemeProvider>
  )
}

export default MyApp;
