import { createTheme } from '@mui/material';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#BD9F31'
    },
    secondary: {
      main: '#333333',
      contrastText: 'white'
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'Inter, sans-serif'
    }
  }
});

export { globalTheme };
