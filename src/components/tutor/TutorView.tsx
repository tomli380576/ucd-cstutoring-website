import { attendanceCol } from '@/src/utils/firebase';
import { Typography } from '@mui/material';
import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import AttendanceTable from '../admin/AttendanceTable';

type TutorViewProps = {
  userId: string;
};

export default function TutorView({ userId }: TutorViewProps) {
  const [attendanceEntries, setAttendanceEntries] = useState<Attendance[]>([]);

  useEffect(() => {
    const getFirebaseData = async () => {
      await getDocs(attendanceCol).then(snapshot => {
        snapshot.docs.forEach(doc => {
          console.log(doc.data().entries.filter(entry => entry.helper.id === userId));
          setAttendanceEntries(
            doc.data().entries.filter(entry => entry.helper.id === userId)
          );
        });
      });
    };

    getFirebaseData();
  }, [userId]);

  return (
    <>
      <Typography>Tutor View</Typography>
      <AttendanceTable entries={attendanceEntries} />
    </>
  );
}
