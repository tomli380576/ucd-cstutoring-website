import { createTheme } from '@mui/material';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#FFDE28',
      contrastText: 'black'
    },
    secondary: {
      main: '#333333',
      contrastText: 'white'
    }
  },
  typography: {
    body1: {
      fontWeight: 'lighter'
    },
    allVariants: {
      fontFamily: 'Inter, sans-serif'
    }
  }
});

export { globalTheme };
