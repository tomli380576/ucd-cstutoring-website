import { Typography } from '@mui/material';
import AttendanceTable from './AttendanceTable';
import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { attendanceCol } from '@/src/utils/firebase';

export default function AdminView() {
  const [attendanceEntries, setAttendanceEntries] = useState<Attendance[]>([]);

  useEffect(() => {
    const getFirebaseData = async () => {
      await getDocs(attendanceCol).then(snapshot => {
        snapshot.docs.forEach(doc => {
          setAttendanceEntries(doc.data().entries);
        });
      });
    };

    getFirebaseData();
  }, []);

  return (
    <>
      <Typography fontWeight="bold" fontSize="2rem" textAlign="center" marginBottom={1}>
        Admin View
      </Typography>
      <AttendanceTable entries={attendanceEntries} />
    </>
  );
}
