import { createTheme } from '@mui/material';
import { BRAND_COLOR } from '../utils/constants';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: BRAND_COLOR
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
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontSize: 24
  }
});
