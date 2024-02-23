import { Typography } from '@mui/material';
import { useSession } from 'next-auth/react';

export default function AccountPage() {
  const { data: session, status } = useSession();

  if (status !== 'authenticated') {
    return <></>;
  }

  return <Typography>My Account</Typography>;
}
