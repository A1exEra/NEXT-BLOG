import '@/styles/globals.scss';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
// import { GlobalStyles } from '@/styles/globalStyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
