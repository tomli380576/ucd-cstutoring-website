import { ThemeProvider } from '@emotion/react';
import Home from './home';
import { globalTheme } from '@/styles/mui-themes';

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
