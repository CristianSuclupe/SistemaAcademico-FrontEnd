import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Registration } from "../api/registration";
import { IStudent } from "../types/student";
import { GradeTable } from "../components/GradeTable";

const registrationController = new Registration();

export const GradeRegister = () => {
  const { id } = useParams<{ id: string }>();
  const [stundets, setStudents] = useState<IStudent[]>([]);

  useEffect(() => {
    (async () => {
      if (!id) return null;
      const rpta = await registrationController.getStudentsPerClass(id);
      setStudents(rpta.data.students);
    })();
  }, []);

  return (
    <>
      <section className="w-3/4">
        <h1 className="text-secondary font-semibold text-3xl mb-10 tracking-normal">
          Registrar Notas
        </h1>
        {stundets.length > 0 ? (
          <GradeTable students={stundets} />
        ) : (
          <p>Aún no hay estudiantes registrados</p>
        )}
      </section>
    </>
  );
};
