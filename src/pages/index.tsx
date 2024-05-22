import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { BRAND_COLOR } from '../utils/constants';
import discordLogo from '@/public/discord_logo.svg';
import linktreeLogo from '@/public/linktree_logo.svg';
import calendar from '@/public/calendar.svg';
import youtubeLogo from '@/public/youtube_logo.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Box marginTop="10%" height="80vh">
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
        <Box display="flex" justifyContent="center" gap={16}>
          <Link href="https://discord.com/invite/HXfwHbYF7f" target="_blank">
            <Image src={discordLogo} alt="Discord" />
          </Link>
          <Link href="https://linktr.ee/cstutoringatucd" target="_blank">
            <Image src={linktreeLogo} alt="Linktree" />
          </Link>
          <Link
            href="https://sites.google.com/view/cs-tutoring-ucd/tutoring-calendar?authuser=0"
            target="_blank"
          >
            <Image src={calendar} alt="Calendar" />
          </Link>
          <Link href="https://www.youtube.com/@cstutoringatucd/featured" target="_blank">
            <Image src={youtubeLogo} alt="Youtube" />
          </Link>
        </Box>
      </Box>

      <Box width="65%" margin="0 auto">
        <Typography
          className="linear-gradient-text"
          fontSize={120}
          fontWeight={500}
          marginBottom="4rem"
          textAlign="center"
        >
          Inclusive, Flexible, and Resourceful
        </Typography>
        <Box display="flex" flexDirection="column" gap="2rem" margin="0 auto">
          <Typography>
            Welcome to CS Peer Tutoring! We are affiliated with the CS Department at UC
            Davis. Every quarter, the CS Tutoring Committee organizes undergraduate
            volunteer tutors to help students with undergraduate CS courses. All of our
            tutors are approved by the department, and received high grades in the courses
            they tutor. We offer our tutoring services throughout the academic year
            (except the Summer).
          </Typography>
          <Typography>
            CS tutoring is free for all students --- just join our{' '}
            <Link
              href="https://discord.com/invite/HXfwHbYF7f"
              target="_blank"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Discord server
            </Link>
            .
          </Typography>
          <Typography>
            You can contact us at{' '}
            <Link
              href="mailto:cstutoring@ucdavis.edu"
              target="_blank"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              cstutoring@ucdavis.edu
            </Link>
            .
          </Typography>
        </Box>
      </Box>

      <Box width="65%" margin="0 auto">
        <Typography
          className="linear-gradient-text"
          fontSize={120}
          fontWeight={500}
          textAlign="center"
        >
          Become a Tutor!
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap="4rem"
          marginTop="4rem"
          marginBottom="4rem"
        >
          <Box display="flex" flexDirection="column" gap="2rem">
            <Typography>Apply to be a tutor for Spring 2024!</Typography>
            <Typography>
              If you&apos;re interested in helping your fellow students in Computer
              Science and would like to hone your interpersonal skills, we urge you to
              apply! We are flexible with schedule changes and would really appreciate
              your help!
            </Typography>
            <Typography>Click here to apply!</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
