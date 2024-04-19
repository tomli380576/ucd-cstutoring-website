import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { millisecondsToMinutesSeconds } from '../../utils/utils';

const columnHelper = createColumnHelper<Attendance>();

const columns = [
  columnHelper.accessor('activeTimeMs', {
    header: () => 'Active Time',
    cell: info => {
      const { minutes, seconds } = millisecondsToMinutesSeconds(info.getValue());

      return `${minutes} min. ${seconds} sec.`;
    }
  }),
  columnHelper.accessor('helpStartUnixMs', {
    header: () => 'Help Start Date',
    cell: info => {
      const date = new Date(info.getValue());

      return `${date.toDateString()} ${date.toLocaleTimeString()}`;
    }
  }),
  columnHelper.accessor('helpEndUnixMs', {
    header: () => 'Help End Date',
    cell: info => {
      const date = new Date(info.getValue());

      return `${date.toDateString()} ${date.toLocaleTimeString()}`;
    }
  }),
  columnHelper.accessor('helpedMembers', {
    header: () => 'Helped Members',
    cell: info => {
      return info.getValue().map(member => <p key={member.id}>{member.displayName}</p>);
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

  return (
    <div>
      <table style={{ borderCollapse: 'collapse' }}>
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
                <td key={cell.id} style={{ border: '1px solid white', padding: 8 }}>
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
