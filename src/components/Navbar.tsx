import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import Image from 'next/image';
import logo from '@/public/tutoring-logo.svg';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyAccount = () => {
    handleClose();
    router.push('/account');
  };

  const handleLogout = () => {
    handleClose();
    signOut();
  };

  return (
    <AppBar position="sticky" style={{ padding: '1rem' }}>
      <Toolbar>
        <Box
          display="flex"
          gap="1rem"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box display="flex" gap="1rem" alignItems="center">
            <Link href="/">
              <Image src={logo} alt="logo" width={50} height={50} />
            </Link>
            <Typography fontWeight={500}>CS Tutoring - UC Davis</Typography>
          </Box>
          <Box display="flex" gap="2rem" alignItems="center">
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Become a Tutor!</Typography>
            <Typography>Team</Typography>
            {!session ? (
              <Button
                variant="contained"
                style={{ borderRadius: 20 }}
                onClick={() => signIn('discord')}
              >
                <Typography color="white">Tutor Login</Typography>
              </Button>
            ) : (
              <>
                <IconButton
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleAvatarClick}
                >
                  <Avatar />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                >
                  <MenuItem onClick={handleMyAccount}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
