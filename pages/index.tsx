import { Stack, Box, Typography, Button } from '@mui/material';

function Home(): JSX.Element {
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
          <Typography variant="h1" color={'white'}>
            CS Tutoring at UC Davis
          </Typography>
          <Typography variant="h3" color={'white'} mb={10}>
            A free, peer-run service for UC Davis students.
          </Typography>

          <Button
            variant="contained"
            sx={{ p: 2, borderRadius: 5 }}
            href="https://www.google.com/maps/"
          >
            Join Our Discord Today!
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Home;
