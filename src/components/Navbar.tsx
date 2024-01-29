import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '@/public/tutoring-logo.svg';

export default function Navbar() {
  return (
    <AppBar position="static">
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
            <Typography fontSize={24} fontWeight={500}>
              CS Tutoring - UC Davis
            </Typography>
          </Box>
          <Box display="flex" gap="2rem" alignItems="center">
            <Typography fontSize={24}>Home</Typography>
            <Typography fontSize={24}>About</Typography>
            <Typography fontSize={24}>Become a Tutor!</Typography>
            <Typography fontSize={24}>Team</Typography>
            <Button variant="contained">
              <Typography fontSize={24}>Tutor Login</Typography>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
