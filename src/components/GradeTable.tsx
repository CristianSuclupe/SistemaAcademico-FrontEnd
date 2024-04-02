import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { IStudent } from "../types/student";
import { EditableCell } from "./EditableCell";

type EditableCellProps = {
  students: IStudent[];
};

interface IGrade {
  n: number;
  id: string;
  name: string;
  surname: string;
  dni: string;
  grade: number;
}

const columnHelper = createColumnHelper<IGrade>();

const columns = [
  columnHelper.accessor("n", {
    header: "N",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("dni", {
    header: "DNI",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("surname", {
    header: "surname",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "name",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("grade", {
    header: "grade",
    cell: EditableCell,
  }),
];

export const GradeTable = ({ students }: EditableCellProps) => {
  const data: IGrade[] = students.map((student, index) => ({
    n: index + 1,
    id: student.id,
    dni: student.dni,
    surname: student.surname,
    name: student.name,
    grade: 0,
  }));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="text-center overflow-hidden border-collapse rounded-lg">
      <thead className="bg-main/20 text-center">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="border-[1px] border-main rounded-lg">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
