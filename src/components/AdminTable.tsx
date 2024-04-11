import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { attendanceCol } from '@/src/utils/firebase';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';

const columnHelper = createColumnHelper<Attendance>();

const columns = [
  columnHelper.accessor('activeTimeMs', {
    cell: info => info.getValue()
  }),
  columnHelper.accessor('helpEndUnixMs', {
    cell: info => info.getValue()
  }),
  columnHelper.accessor('helpStartUnixMs', {
    cell: info => info.getValue()
  }),
  columnHelper.accessor('helpedMembers', {
    cell: info => {
      return info.getValue().map(member => <p key={member.id}>{member.displayName}</p>);
    }
  }),
  columnHelper.accessor('helper', {
    cell: info => <p>{info.getValue().displayName}</p>
  })
];

export default function AdminTable() {
  const [attendanceEntries, setAttendanceEntries] = useState<Attendance[]>([]);
  const table = useReactTable({
    columns,
    data: attendanceEntries,
    getCoreRowModel: getCoreRowModel()
  });

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
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
