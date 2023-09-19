import { createTheme } from '@mui/material';

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#BD9F31',
    }
  },
  typography: {
    allVariants: {
      fontFamily: "Intel, sans-serif"
    }
  }
});

export { globalTheme };
