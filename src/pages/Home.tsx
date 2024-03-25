import { useState, useEffect } from 'react';
import { CourseCard } from '../components/CourseCard';
import { Class } from '../api/class';
import { Token } from '../api/token';
import { IClass } from '../types/class';

const classController = new Class();
const tokenController = new Token();

export const Home = () => {
  const [classes, setClasses] = useState<IClass[]>([]);

  useEffect(() => {
    (async () => {
      const token = await tokenController.getToken();
      if (!token) return null;
      const teacher = await tokenController.getUser(token);
      const rpta = await classController.getByTeacher(teacher.id);
      if (!rpta) return null;
      setClasses(rpta.data);
    })();
  }, []);

  return (
    <main className="p-9 font-Montserrat flex w-full">
      <section className="w-3/4">
        <h1 className="text-secondary font-semibold text-3xl mb-10 tracking-normal">
          Cursos
        </h1>
        <div className="grid grid-cols-3">
          {classes.map((classAux) => (
            <CourseCard classAux={classAux} key={classAux.id} />
          ))}
        </div>
      </section>
      <section>hola</section>
    </main>
  );
};
