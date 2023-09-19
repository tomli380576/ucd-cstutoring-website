import { Stack, Box, Typography, Button, withStyles } from '@mui/material';
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

function Home(): JSX.Element {
  const spring = useSpring({
    from: { y: 100 },
    to: { y: 0 }
  });
  return (
    <Stack direction="column">
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
        <Stack alignItems="center">
          <Typography
            variant="h1"
            color={'white'}
            sx={{ ...gradientStyle, fontWeight: 700 }}
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
  );
}

export default Home;
