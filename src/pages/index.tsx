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
      <Box display="flex" justifyContent="space-around" marginTop="10%">
        <Box>
          <Typography textAlign="center" fontSize={70} fontWeight={500}>
            CS Tutoring
          </Typography>
          <Typography textAlign="center" fontSize={40}>
            @ UC Davis
          </Typography>
          <Typography
            className="linear-gradient-text"
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

      <Box>
        <Typography
          className="linear-gradient-text"
          fontSize={120}
          fontWeight={500}
          width="65%"
          margin="0 auto"
          textAlign="center"
        >
          Inclusive, Flexible, and Resourceful
        </Typography>
        <Box display="flex" justifyContent="center" gap="4rem">
          <Box
            width={462}
            height={414}
            borderRadius={20}
            style={{ backgroundColor: '#464646' }}
          ></Box>
          <Box width="38%" display="flex" flexDirection="column" gap="2rem">
            <Typography>
              Welcome to CS Peer Tutoring! We are affiliated with the CS Department at UC
              Davis. Every quarter, the CS Tutoring Committee organizes undergraduate
              volunteer tutors to help students with undergraduate CS courses. All of our
              tutors are approved by the department, and received high grades in the
              courses they tutor. We offer our tutoring services throughout the academic
              year (except the Summer).
            </Typography>
            <Typography>
              CS tutoring is free for all students --- just join our Discord server.
            </Typography>
            <Typography>You can contact us at cstutoring@ucdavis.edu.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
