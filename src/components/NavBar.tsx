import { Link } from 'react-router-dom';
import { routes } from '../router/routes';
export const NavBar = () => {
  return (
    <nav className="bg-main w-16 h-screen">
      <ul>
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
      </ul>
    </nav>
  );
};
