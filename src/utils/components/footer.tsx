import {
  Paper,
  Stack,
  Typography,
  useTheme,
  Link,
  Divider
} from '@mui/material';

export default function Footer(): JSX.Element {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        px: 10,
        py: 5,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        fontFamily: theme.typography.fontFamily
      }}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: 'secondary.light' }}
          />
        }
      >
        <Stack direction={'column'} spacing={1}>
          <Link href={'/'} underline="hover">
            Home
          </Link>
          <Link href={'/'} underline="hover">
            About
          </Link>
          <Link href={'/'} underline="hover">
            Become a Tutor
          </Link>
          <Link href={'/'} underline="hover">
            Team
          </Link>
          <Link href={'/'} underline="hover">
            Tutor Login
          </Link>
        </Stack>
        <Stack spacing={1}>
          <Link href={'/'} underline="hover">
            Discord
          </Link>
          <Link href={'/'} underline="hover">
            LinkTree
          </Link>
          <Link href={'/'} underline="hover">
            Calendar
          </Link>
          <Link href={'/'} underline="hover">
            Youtube
          </Link>
        </Stack>
        <Stack>
          <Typography variant="h4">CS Tutoring</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
