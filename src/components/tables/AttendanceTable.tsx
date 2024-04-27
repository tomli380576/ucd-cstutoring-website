import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { millisecondsToMinutesSeconds } from '../../utils/utils';
import { Typography } from '@mui/material';
import SessionStats from './SessionStats';

const columnHelper = createColumnHelper<Attendance>();

const columns = [
  columnHelper.accessor(
    row => {
      const { minutes, seconds } = millisecondsToMinutesSeconds(
        row.helpEndUnixMs - row.helpStartUnixMs
      );

      return `${minutes} min. ${seconds} sec.`;
    },
    {
      id: 'sessionTime',
      header: 'Session Time'
    }
  ),
  columnHelper.accessor('helpStartUnixMs', {
    header: () => 'Help Start Date',
    cell: info => {
      const date = new Date(info.getValue());

      return `${date.toDateString()} - ${date.toLocaleTimeString()}`;
    }
  }),
  columnHelper.accessor('helpEndUnixMs', {
    header: () => 'Help End Date',
    cell: info => {
      const date = new Date(info.getValue());

      return `${date.toDateString()} - ${date.toLocaleTimeString()}`;
    }
  }),
  columnHelper.accessor('activeTimeMs', {
    header: () => 'Active Time',
    cell: info => {
      const { minutes, seconds } = millisecondsToMinutesSeconds(info.getValue());

      return `${minutes} min. ${seconds} sec.`;
    }
  }),
  columnHelper.accessor('helpedMembers', {
    header: () => 'Helped Members',
    cell: info => {
      return info
        .getValue()
        .map(member => member.displayName)
        .join(', ');
    }
  }),
  columnHelper.accessor('helper', {
    header: 'Helper',
    cell: info => <p>{info.getValue().displayName}</p>
  })
];

type AttendanceTableProps = {
  entries: Attendance[];
};

export default function AttendanceTable({ entries }: AttendanceTableProps) {
  const table = useReactTable({
    columns,
    data: entries,
    getCoreRowModel: getCoreRowModel()
  });

  if (!entries.length) {
    return (
      <Typography
        fontWeight="bold"
        fontSize="1.5rem"
        textAlign="center"
        marginBottom={8}
        marginTop={8}
      >
        No attendance entries.
      </Typography>
    );
  }

  return (
    <>
      <Typography
        fontWeight="bold"
        fontSize="1.5rem"
        textAlign="center"
        marginBottom={2}
        marginTop={2}
      >
        Attendance
      </Typography>
      <SessionStats entries={entries} />
      <div style={{ overflowY: 'scroll', height: '32rem', padding: 4 }}>
        <table
          style={{
            borderCollapse: 'collapse',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 8,
            marginTop: 8
          }}
        >
          <thead style={{ position: 'sticky', top: 0 }}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} style={{ fontWeight: 600 }}>
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
                  <td
                    key={cell.id}
                    style={{
                      border: '1px solid white',
                      padding: 16,
                      textAlign: 'center'
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
