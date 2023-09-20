import Footer from '@/src/utils/components/footer';
import NavBar from '@/src/utils/components/nav-bar';
import { CS_DEPT_LINK, DISCORD_INVITE } from '@/src/utils/strings';
import { Stack, Box, Typography, Button, Link } from '@mui/material';
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

const borderGradient = {
  background: 'linear-gradient(-86deg, #FFDE28, #7AEC8D);',
  WebkitBackgroundClip: 'text',
  WebkitTextStroke: '4px transparent',
  color: '#222222'
};

const AnimatedButton = animated(Button);

function Home(): JSX.Element {
  const spring = useSpring({
    from: { y: 100 },
    to: { y: 0 }
  });
  return (
    <Box sx={{ backgroundColor: '#1e1e1e' }}>
      <NavBar />
      <Stack direction="column" spacing={10}>
        {/**Section 1 */}
        <Box
          height="100vh"
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            backgroundImage: 'url(/home_background.png)',
            backgroundPosition: 'right',
            backgroundSize: 'cover'
          }}
        >
          <Stack alignItems="center" spacing={10}>
            <Box>
              <Typography
                variant="h1"
                fontWeight="bolder"
                color={'white'}
                lineHeight="normal"
                sx={borderGradient}
              >
                CS Tutoring at UC Davis
              </Typography>
              <Typography variant="h3" color={'white'}>
                A free, peer-run service for UC Davis students.
              </Typography>
            </Box>
            <AnimatedButton
              variant="outlined"
              sx={{ p: 1.5, fontSize: '1rem' }}
              style={spring}
              onClick={() => open(DISCORD_INVITE)}
            >
              Join Our Discord Today!
            </AnimatedButton>
          </Stack>
        </Box>

        <Box
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
            mb={10}
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
      <Footer />
    </Box>
  );
}

export default Home;
