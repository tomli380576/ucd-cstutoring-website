import '@/styles/globals.css';
import { globalTheme } from '@/styles/mui-themes';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={globalTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
