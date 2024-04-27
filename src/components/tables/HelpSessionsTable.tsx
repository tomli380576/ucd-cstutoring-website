import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { millisecondsToMinutesSeconds } from '../../utils/utils';
import { Typography } from '@mui/material';
import SessionStats from './SessionStats';

const columnHelper = createColumnHelper<HelpSession>();

const columns = [
  columnHelper.accessor(
    row => {
      const { minutes, seconds } = millisecondsToMinutesSeconds(
        row.sessionEndUnixMs - row.sessionStartUnixMs
      );

      return `${minutes} min. ${seconds} sec.`;
    },
    {
      id: 'sessionTime',
      header: 'Session Time'
    }
  ),
  columnHelper.accessor('sessionStartUnixMs', {
    header: 'Session Start',
    cell: info => {
      const date = new Date(info.getValue());

      return `${date.toDateString()} - ${date.toLocaleTimeString()}`;
    }
  }),
  columnHelper.accessor('sessionEndUnixMs', {
    header: 'Session End',
    cell: info => {
      const date = new Date(info.getValue());

      return `${date.toDateString()} - ${date.toLocaleTimeString()}`;
    }
  }),
  columnHelper.accessor('waitTimeMs', {
    header: 'Wait Time',
    cell: info => {
      const { minutes, seconds } = millisecondsToMinutesSeconds(info.getValue());

      return `${minutes} min. ${seconds} sec.`;
    }
  }),
  columnHelper.accessor('waitStart', {
    header: 'Wait Start',
    cell: info => {
      const date = new Date(info.getValue());

      return `${date.toDateString()} - ${date.toLocaleTimeString()}`;
    }
  }),
  columnHelper.accessor('queueName', {
    header: 'Queue',
    cell: info => <p>{info.getValue()}</p>
  }),
  columnHelper.accessor('student', {
    header: 'Student',
    cell: info => <p>{info.getValue().displayName}</p>
  }),
  columnHelper.accessor('helper', {
    header: 'Helper',
    cell: info => <p>{info.getValue().displayName}</p>
  })
];

type HelpSessionsTableProps = {
  entries: HelpSession[];
};

export default function HelpSessionsTable({ entries }: HelpSessionsTableProps) {
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
        No help session entries.
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
        Help Sessions
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
