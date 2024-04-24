import { Box, Typography } from '@mui/material';

type RoleChipProps = {
  label: string;
};

export default function RoleChip({ label }: RoleChipProps) {
  return (
    <Box
      bgcolor="#464646"
      borderRadius={8}
      paddingLeft={2}
      paddingRight={2}
      paddingTop={1}
      paddingBottom={1}
    >
      <Typography fontSize="1rem">{label}</Typography>
    </Box>
  );
}
