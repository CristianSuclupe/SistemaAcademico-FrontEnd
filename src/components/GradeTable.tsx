import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { IStudent } from "../types/student";
import { EditableCell } from "./EditableCell";

type GradeTableProps = {
  students: IStudent[];
};

export interface IGrade {
  n: number;
  id: string;
  name: string;
  surname: string;
  dni: string;
  grade: number;
}

const columnHelper = createColumnHelper<IGrade>();

export const GradeTable = ({ students }: GradeTableProps) => {
  let data: IGrade[] = students.map((student, index) => ({
    n: index + 1,
    id: student.id,
    dni: student.dni,
    surname: student.surname,
    name: student.name,
    grade: 0,
  }));

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
      header: "Apellidos",
      cell: (row) => row.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Nombre",
      cell: (row) => row.getValue(),
    }),
    columnHelper.accessor("grade", {
      header: "Nota",
      cell: (row) => (
        <EditableCell
          id={row.row.original.id}
          updateGradeData={updateGradeData}
        />
      ),
    }),
  ];

  const updateGradeData = (id: string, grade: number) => {
    data = data.map((student) =>
      student.id === id ? { ...student, grade } : student
    );
  };
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSubmmit = () => {
    console.log(data);
  };
  return (
    <div className="w-4/5 text-center overflow-hidden border-collapse rounded-lg border-b-[0.1px] border-main">
      <table className="w-full">
        <thead className="bg-main/20">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border-[1px] border-white">
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
                <td
                  key={cell.id}
                  className="border-x-[1px] border-main rounded-lg"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmmit}>obtener datos</button>
    </div>
  );
};
