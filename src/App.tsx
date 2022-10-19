import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Home';
import { NavBar } from './NavBar';
import { Stack, Box } from '@mui/material';

import './App.css';


function App() {

  return (
    <Stack direction='column' spacing={2}>
      <Box sx={{ position: 'absolute' }}>
        <NavBar />
      </Box>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Stack>

  )
}

export default App
