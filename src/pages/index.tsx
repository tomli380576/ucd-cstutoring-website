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
      <Box display="flex" justifyContent="space-around" marginTop="10%" height="80vh">
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
          borderRadius="20%"
          style={{ backgroundColor: '#464646' }}
        ></Box>
      </Box>

      <Box width="65%" margin="0 auto">
        <Typography
          className="linear-gradient-text"
          fontSize={120}
          fontWeight={500}
          marginBottom="4rem"
        >
          Inclusive, Flexible, and Resourceful
        </Typography>
        <Box display="flex" justifyContent="center" gap="4rem">
          <Box
            width={462}
            height={414}
            borderRadius="20%"
            style={{ backgroundColor: '#464646' }}
          ></Box>
          <Box width="50%" display="flex" flexDirection="column" gap="2rem">
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

      <Box width="65%" margin="4rem auto 0">
        <Typography className="linear-gradient-text" fontSize={120} fontWeight={500}>
          Become a Tutor!
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap="4rem"
          marginTop="4rem"
          marginBottom="4rem"
        >
          <Box width="50%" display="flex" flexDirection="column" gap="2rem">
            <Typography>Apply to be a tutor for Spring 2024!</Typography>
            <Typography>
              If you&apos;re interested in helping your fellow students in Computer
              Science and would like to hone your interpersonal skills, we urge you to
              apply! We are flexible with schedule changes and would really appreciate
              your help!
            </Typography>
            <Typography>Click here to apply!</Typography>
          </Box>
          <Box
            width={462}
            height={414}
            borderRadius="20%"
            style={{ backgroundColor: '#464646' }}
          ></Box>
        </Box>
      </Box>

      <Box width="65%" margin="4rem auto 0">
        <Typography className="linear-gradient-text" fontSize={120} fontWeight={500}>
          Board
        </Typography>
        <Typography fontSize={50} marginBottom="4rem">
          Current Board
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          justifyItems="center"
          rowGap="4rem"
        >
          {Array(4).fill(
            <Box>
              <Box
                width={166}
                height={166}
                borderRadius="20%"
                style={{ backgroundColor: '#d9d9d9' }}
              ></Box>
              <Typography fontSize={20} fontWeight={500}>
                First + Last Name
              </Typography>
            </Box>
          )}
        </Box>
        <Typography fontSize={50} marginTop="4rem" marginBottom="4rem">
          Faculty Advisors
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          justifyItems="center"
          rowGap="4rem"
        >
          {Array(4).fill(
            <Box>
              <Box
                width={166}
                height={166}
                borderRadius="20%"
                style={{ backgroundColor: '#d9d9d9' }}
              ></Box>
              <Typography fontSize={20} fontWeight={500}>
                First + Last Name
              </Typography>
            </Box>
          )}
        </Box>
        <Typography fontSize={50} marginTop="4rem" marginBottom="4rem">
          Past Board
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          justifyItems="center"
          rowGap="4rem"
        >
          {Array(8).fill(
            <Box>
              <Box
                width={166}
                height={166}
                borderRadius="20%"
                style={{ backgroundColor: '#d9d9d9' }}
              ></Box>
              <Typography fontSize={20} fontWeight={500}>
                First + Last Name
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
