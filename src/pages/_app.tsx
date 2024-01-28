import type { AppProps } from 'next/app';
import { ThemeOptions, ThemeProvider } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#BD9F31'
        },
        secondary: {
            main: '#f50057'
        },
        background: {
            default: '#1e1e1e',
            paper: '#1e1e1e'
        }
    },
    typography: {
        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif'
    }
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={themeOptions}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
