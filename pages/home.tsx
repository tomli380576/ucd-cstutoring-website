import { CS_DEPT_LINK, DISCORD_INVITE } from '@/utils/strings';
import {
  Stack,
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Link
} from '@mui/material';
import NextLink from 'next/link';
import { animated, useSpring } from '@react-spring/web';

// not in the home component to avoid excessive object creation/destruction
const gradientStyle = {
  backgroundColor: 'primary',
  backgroundImage: 'linear-gradient(180deg, #FFDE28, #FFDE2880)',
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
            <Button color="inherit">
              <NextLink
                href={'/'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Home
              </NextLink>
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Become A Tutor</Button>
            <Button color="inherit">Meet the Team!</Button>
            <Button color="primary" variant="contained">
              Tutor Login
            </Button>
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
        {/**Section 1 */}
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
              sx={{ p: 1.5 }}
              style={spring}
              onClick={() => open(DISCORD_INVITE)}
            >
              Join Our Discord Today!
            </AnimatedButton>
          </Stack>
        </Box>

        <Box
          height="100vh"
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            backgroundColor: '#1E1E1E'
          }}
        >
          <Stack
            direction={'column'}
            alignItems={'start'}
            justifyContent={'center'}
            maxWidth={'60%'}
            spacing={2}
          >
            <Typography variant="h1" sx={gradientStyle} fontWeight={700}>
              Inclusive, Flexible, and Resourceful
            </Typography>

            <Stack direction={'column'} spacing={2}>
              <Typography variant="body1" color={'white'} component={'p'}>
                Welcome to CS Peer Tutoring! We are affiliated with the{' '}
                <Link href={CS_DEPT_LINK} underline="always">
                  CS Department at UC Davis
                </Link>
                . Every quarter, the CS Tutoring Committee organizes
                undergraduate volunteer tutors to help students with
                undergraduate CS courses. All of our tutors are approved by the
                department, and received high grades in the courses they tutor.
                We offer our tutoring services throughout the academic year
                (except the Summer).
              </Typography>
              <Typography variant="body1" color={'white'} component={'p'}>
                CS tutoring is free for all students --- just join our{' '}
                <Link href={DISCORD_INVITE} underline="always">
                  Discord Server
                </Link>
              </Typography>
              <Typography variant="body1" color={'white'} component={'p'}>
                You can contact us at cstutoring@ucdavis.edu.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          height="100vh"
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            backgroundColor: '#1E1E1E'
          }}
        >
          <Stack
            direction={'column'}
            alignItems={'start'}
            justifyContent={'center'}
            maxWidth={'60%'}
            spacing={2}
          >
            <Typography variant="h1" sx={gradientStyle} fontWeight={700}>
              Become a Tutor!
            </Typography>

            <Stack direction={'row'}>
              <Typography variant="body1" color={'white'}>
                Apply to become a tutor for Fall 2023! If you're interested in
                helping your fellow students in Computer Science and would like
                to hone your interpersonal skills, we urge you to apply! We are
                flexible with schedule changes and would really appreciate your
                help! Click here to apply!
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Home;
