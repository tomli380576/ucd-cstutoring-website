import { Box, Typography } from '@mui/material';
import { useSelectedServer } from '../utils/atom';
import { useMemo } from 'react';

type RoleChipProps = {
  roleId: string;
};

export default function RoleChip({ roleId }: RoleChipProps) {
  const [selectedServer] = useSelectedServer();

  const roleName = useMemo(() => {
    if (roleId === selectedServer?.server.botAdminRoleId) {
      return 'Bot Admin';
    } else if (roleId === selectedServer?.server.staffRoleId) {
      return 'Tutor';
    } else if (roleId === selectedServer?.server.studentRoleId) {
      return 'Student';
    }

    return '';
  }, [roleId, selectedServer]);

  return (
    <Box
      bgcolor="#464646"
      borderRadius={8}
      paddingLeft={2}
      paddingRight={2}
      paddingTop={1}
      paddingBottom={1}
    >
      <Typography fontSize="1rem">{roleName}</Typography>
    </Box>
  );
}
