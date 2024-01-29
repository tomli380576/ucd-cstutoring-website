import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { BRAND_COLOR } from '../utils/constants';
import discordLogo from '@/public/discord_logo.svg';
import linktreeLogo from '@/public/linktree_logo.svg';
import calendar from '@/public/calendar.svg';
import youtubeLogo from '@/public/youtube_logo.svg';

export default function Home() {
  return (
    <>
      <Navbar />

      <Box display="flex" justifyContent="space-around" marginTop="10%">
        <Box>
          <Typography textAlign="center" fontSize={70} fontWeight={500}>
            CS Tutoring
          </Typography>
          <Typography textAlign="center" fontSize={40}>
            @ UC Davis
          </Typography>
          <Typography
            textAlign="center"
            marginTop="3rem"
            marginBottom="3rem"
            style={{ color: BRAND_COLOR }}
          >
            A free, peer-run service for UC Davis students.
          </Typography>
          <Box display="flex" justifyContent="space-around">
            <Image src={discordLogo} alt="Discord" />
            <Image src={linktreeLogo} alt="Linktree" />
            <Image src={calendar} alt="Calendar" />
            <Image src={youtubeLogo} alt="Youtube" />
          </Box>
        </Box>

        <Box
          width={462}
          height={414}
          borderRadius={20}
          style={{ backgroundColor: '#464646' }}
        ></Box>
      </Box>
    </>
  );
}
