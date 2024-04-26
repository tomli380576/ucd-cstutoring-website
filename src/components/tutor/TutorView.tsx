import { attendanceCol, helpSessionsCol } from '@/src/utils/firebase';
import { Typography } from '@mui/material';
import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import AttendanceTable from '../tables/AttendanceTable';
import HelpSessionsTable from '../tables/HelpSessionsTable';

type TutorViewProps = {
  userId: string;
};

export default function TutorView({ userId }: TutorViewProps) {
  const [attendanceEntries, setAttendanceEntries] = useState<Attendance[]>([]);
  const [helpSessionEntries, setHelpSessionEntries] = useState<HelpSession[]>([]);

  useEffect(() => {
    const getFirebaseData = async () => {
      await getDocs(attendanceCol).then(snapshot => {
        snapshot.docs.forEach(doc => {
          setAttendanceEntries(
            doc.data().entries.filter(entry => entry.helper.id === userId)
          );
        });
      });
      await getDocs(helpSessionsCol).then(snapshot => {
        snapshot.docs.forEach(doc => {
          setHelpSessionEntries(
            doc.data().entries.filter(entry => entry.helper.id === userId)
          );
        });
      });
    };

    getFirebaseData();
  }, [userId]);

  return (
    <>
      <Typography fontWeight="bold" fontSize="2rem" textAlign="center">
        Tutor View
      </Typography>
      <AttendanceTable entries={attendanceEntries} />
      <HelpSessionsTable entries={helpSessionEntries} />
    </>
  );
}
