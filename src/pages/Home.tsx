import { useState, useEffect } from 'react';
import { ClassCard } from '../components/ClassCard';
import { Class } from '../api/class';
import { IClass } from '../types/class';
import { Records } from '../components/Records';

const classController = new Class();

export const Home = () => {
  const [classes, setClasses] = useState<IClass[]>([]);

  useEffect(() => {
    (async () => {
      const rpta = await classController.getByTeacher();
      if (!rpta) return null;
      setClasses(rpta.data);
    })();
  }, []);

  return (
    <main className="p-10 font-Montserrat flex w-full">
      <section className="w-3/4">
        <h1 className="text-secondary font-semibold text-3xl mb-10 tracking-normal">
          Cursos
        </h1>
        <div className="grid grid-cols-3">
          {classes.map((classAux) => (
            <ClassCard classAux={classAux} key={classAux.id} />
          ))}
        </div>
      </section>
      <Records />
    </main>
  );
};
