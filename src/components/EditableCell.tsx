import { useState } from "react";

interface EditableCellProps {
  id: string;
  updateGradeData: (id: string, grade: number) => void;
}
export const EditableCell = ({ id, updateGradeData }: EditableCellProps) => {
  const [value, setValue] = useState(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const grade = parseInt(e.target.value);
    if (!grade) setValue(0);
    if (grade >= 0 && grade <= 20) setValue(grade);
    updateGradeData(id, value);
  };
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      className="w-full text-center focus:outline-none"
    />
  );
};
