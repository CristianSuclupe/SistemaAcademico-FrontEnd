import { Link } from 'react-router-dom';
import { routes } from '../router/routes';
export const NavBar = () => {
  return (
    <nav className="bg-main w-16 h-[870px] flex flex-col items-center pt-14 rounded-bradius">
      <ul className="h-3/5 flex flex-col items-center justify-between mb-64">
        <li>
          <Link to={routes.HOME}>
            <img src="/images/iconhome.webp" alt="icono home" />
          </Link>
        </li>
        <li>
          <Link to={routes.HOME}>
            <img src="/images/iconprofile.webp" alt="icono home" />
          </Link>
        </li>
        <li>
          <Link to={routes.HOME}>
            <img src="/images/iconcalendar.webp" alt="icono home" />
          </Link>
        </li>
        <li>
          <Link to={routes.HOME}>
            <img src="/images/icontime.webp" alt="icono home" />
          </Link>
        </li>
        <li>
          <Link to={routes.HOME}>
            <img src="/images/iconhelp.webp" alt="icono home" />
          </Link>
        </li>
      </ul>
      <button>
        <img src="/images/icon.webp" alt="icono" />
      </button>
    </nav>
  );
};
