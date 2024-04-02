import { useState } from "react";
export const EditableCell = () => {
  const [value, setValue] = useState("");
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="text-center"
    />
  );
};
