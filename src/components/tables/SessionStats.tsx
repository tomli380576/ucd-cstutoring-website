import {
  getLastSunday,
  isAttendance,
  millisecondsToMinutesSeconds
} from '@/src/utils/utils';
import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';

type SessionStatsProps = {
  entries: Attendance[] | HelpSession[];
};

export default function SessionStats({ entries }: SessionStatsProps) {
  const pastWeekSessionTime = useMemo(
    () =>
      millisecondsToMinutesSeconds(
        entries.reduce((acc, cur) => {
          if (isAttendance(cur)) {
            return getLastSunday() > new Date(cur.helpStartUnixMs)
              ? acc
              : acc + (cur.helpEndUnixMs - cur.helpStartUnixMs);
          }

          return getLastSunday() > new Date(cur.sessionStartUnixMs)
            ? acc
            : acc + (cur.sessionEndUnixMs - cur.sessionStartUnixMs);
        }, 0)
      ),
    [entries]
  );

  const allSessionTime = useMemo(
    () =>
      millisecondsToMinutesSeconds(
        entries.reduce((acc, cur) => {
          if (isAttendance(cur)) {
            return acc + (cur.helpEndUnixMs - cur.helpStartUnixMs);
          }

          return acc + (cur.sessionEndUnixMs - cur.sessionStartUnixMs);
        }, 0)
      ),
    [entries]
  );

  return (
    <Box display="flex" justifyContent="center" gap={8}>
      <Typography fontSize="1.5rem" textAlign="center" marginBottom={2} marginTop={2}>
        <span style={{ fontWeight: 'bold' }}>
          Session Time (Week of{' '}
          {`${getLastSunday().getMonth() + 1}/${getLastSunday().getDate()}`}):
        </span>{' '}
        {`${pastWeekSessionTime.minutes} min. ${pastWeekSessionTime.seconds} sec.`}
      </Typography>
      <Typography fontSize="1.5rem" textAlign="center" marginBottom={2} marginTop={2}>
        <span style={{ fontWeight: 'bold' }}>Session Time (All Time):</span>{' '}
        {`${allSessionTime.minutes} min. ${allSessionTime.seconds} sec.`}
      </Typography>
    </Box>
  );
}
