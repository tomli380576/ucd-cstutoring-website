import { createTheme } from '@mui/material';

export const theme = createTheme({
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
});
