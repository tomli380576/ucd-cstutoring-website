import { Typography } from '@mui/material';
import AttendanceTable from '../tables/AttendanceTable';
import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { attendanceCol, helpSessionsCol } from '@/src/utils/firebase';
import HelpSessionsTable from '../tables/HelpSessionsTable';

export default function AdminView() {
  const [attendanceEntries, setAttendanceEntries] = useState<Attendance[]>([]);
  const [helpSessionEntries, setHelpSessionEntries] = useState<HelpSession[]>([]);

  useEffect(() => {
    const getFirebaseData = async () => {
      await getDocs(attendanceCol).then(snapshot => {
        snapshot.docs.forEach(doc => {
          setAttendanceEntries(doc.data().entries);
        });
      });
      await getDocs(helpSessionsCol).then(snapshot => {
        snapshot.docs.forEach(doc => {
          setHelpSessionEntries(doc.data().entries);
        });
      });
    };

    getFirebaseData();
  }, []);

  return (
    <>
      <Typography fontWeight="bold" fontSize="2rem" textAlign="center">
        Admin View
      </Typography>
      <AttendanceTable entries={attendanceEntries} />
      <HelpSessionsTable entries={helpSessionEntries} />
    </>
  );
}
