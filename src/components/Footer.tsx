import { Box, Typography } from '@mui/material';
import { BRAND_COLOR } from '../utils/constants';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Footer() {
  const { data: session } = useSession();
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
        <Link
          href="https://forms.gle/xxwsm6TJSZ7zgntx9"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Typography>Become a Tutor!</Typography>
        </Link>
        {!session && <Typography>Tutor Login</Typography>}
      </Box>

      <Box display="flex" flexDirection="column" gap="1rem">
        <Link
          href="https://discord.com/invite/HXfwHbYF7f"
          target="_blank"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Typography>Discord</Typography>
        </Link>
        <Link
          href="https://linktr.ee/cstutoringatucd"
          target="_blank"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Typography>LinkTree</Typography>
        </Link>
        <Link
          href="https://sites.google.com/view/cs-tutoring-ucd/tutoring-calendar?authuser=0"
          target="_blank"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Typography>Calendar</Typography>
        </Link>
        <Link
          href="https://www.youtube.com/@cstutoringatucd/featured"
          target="_blank"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Typography>YouTube</Typography>
        </Link>
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
