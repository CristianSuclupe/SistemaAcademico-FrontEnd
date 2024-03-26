import { Link } from 'react-router-dom';
import { IClass } from '../types/class';

interface ClassCardProps {
  classAux: IClass;
}

export const ClassCard = ({ classAux }: ClassCardProps) => {
  return (
    <div className="rounded-xl w-72 h-56 shadow-xl">
      <div className="h-1/2 rounded-t-xl bg-gradient-to-r from-secondary/90 via-secondary/80 to-main/90 relative">
        <img
          src="/images/icon.webp"
          alt="icon"
          className="absolute top-2 right-2"
        />
      </div>
      <div className="p-3">
        <h2 className=" text-orange-400 uppercase font-semibold">
          {classAux.course.name}
        </h2>
        <p className="text-secondary font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-4/6">
          {classAux.id}
        </p>
        <ul className="flex w-3/5 justify-between mt-3">
          <li>
            <Link to={'/'}>
              <img src="/images/iconnotes.webp" alt="icono de notas" />
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <img src="/images/icontalk.webp" alt="icono de foro" />
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <img src="/images/iconarchive.webp" alt="icono de archivos" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
