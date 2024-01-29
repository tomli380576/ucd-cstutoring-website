import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '@/public/tutoring-logo.svg';

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          display="flex"
          gap="1rem"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box display="flex" gap="1rem" alignItems="center">
            <Image src={logo} alt="logo" width={50} height={50} />
            <Typography fontWeight={500}>CS Tutoring - UC Davis</Typography>
          </Box>
          <Box display="flex" gap="2rem" alignItems="center">
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Become a Tutor!</Typography>
            <Typography>Team</Typography>
            <Button variant="contained">
              <Typography>Tutor Login</Typography>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
