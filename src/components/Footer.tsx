import { Box, Typography } from '@mui/material';
import { BRAND_COLOR } from '../utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      marginTop="10%"
      padding="4rem 0"
      style={{ backgroundColor: BRAND_COLOR }}
    >
      <Box display="flex" flexDirection="column" gap="1rem">
        <Typography>Home</Typography>
        <Typography>About</Typography>
        <Typography>Become a Tutor!</Typography>
        <Typography>Team</Typography>
        <Typography>Tutor Login</Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap="1rem">
        <Typography>Discord</Typography>
        <Typography>LinkTree</Typography>
        <Typography>Calendar</Typography>
        <Typography>YouTube</Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        textAlign="right"
        justifyContent="space-between"
      >
        <Box>
          <Typography fontSize={40} fontWeight={500}>
            CS Tutoring
          </Typography>
          <Typography>@ UC Davis</Typography>
        </Box>
        <Typography>Copyright {currentYear}</Typography>
      </Box>
    </Box>
  );
}
