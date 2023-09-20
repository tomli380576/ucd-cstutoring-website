import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Typography,
  Stack,
  Button,
  Divider,
  Tooltip
} from '@mui/material';

import NextLink from 'next/link';

const LightDivider = () => (
  <Divider
    orientation="vertical"
    variant="middle"
    flexItem
    sx={{ bgcolor: 'secondary.light' }}
  />
);

export default function NavBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <Icon>
              <img
                style={{ height: '100%', width: '100%' }}
                src="/tutoring-logo.svg"
              />
            </Icon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CS Tutoring - UC Davis
          </Typography>
          <Stack spacing={1} direction={'row'}>
            <Button color="inherit">
              <NextLink
                href={'/'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Home
              </NextLink>
            </Button>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ bgcolor: 'secondary.light' }}
            />
            <Button color="inherit">About</Button>
            <LightDivider />
            <Button color="inherit">Become A Tutor</Button>
            <LightDivider />
            <Button color="inherit">Meet the Team!</Button>
            <LightDivider />
            <Tooltip title="Coming Soon!" arrow>
              <Button color="primary">Tutor Login</Button>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
