import {
  Stack,
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Icon
} from '@mui/material';
import { animated, useSpring } from '@react-spring/web';

// not in the home component to avoid excessive object creation/destruction
const gradientStyle = {
  backgroundColor: 'primary',
  backgroundImage: 'linear-gradient(180deg, #BD9F31, rgba(189, 159, 49, 0.1))',
  backgroundSize: '100%',
  backgroundRepeat: 'repeat',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const AnimatedButton = animated(Button);

function Nav(): JSX.Element {
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
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Become A Tutor</Button>
            <Button color="inherit">Meet the Team!</Button>
            <Button color="primary" variant='contained'>Tutor Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Home(): JSX.Element {
  const spring = useSpring({
    from: { y: 100 },
    to: { y: 0 }
  });
  return (
    <>
      <Nav />
      <Stack direction="column">
        <Box
          height="100vh"
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            backgroundImage: 'url(/home_background.png)',
            backgroundColor: '#222222',
            backgroundPosition: 'right',
            backgroundSize: 'cover'
          }}
        >
          <Stack alignItems="center">
            <Typography
              variant="h1"
              fontWeight={700}
              color={'white'}
              sx={gradientStyle}
            >
              CS Tutoring at UC Davis
            </Typography>
            <Typography variant="h3" color={'white'} mb={10} sx={gradientStyle}>
              A free, peer-run service for UC Davis students.
            </Typography>
            <AnimatedButton
              variant="contained"
              sx={{ p: 2, borderRadius: 5 }}
              style={spring}
            >
              Join Our Discord Today!
            </AnimatedButton>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Home;
