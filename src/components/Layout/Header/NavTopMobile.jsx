import logo from '@assets/images/logo_blue.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

export default function NavTopMobile({ handleClickShowNavMobile }) {
  const navigate = useNavigate();

  return (
    <div className="navTop3">
      <NavHashLink to="/#">
        <img
          role="button"
          tabIndex={0}
          onKeyDown={() => navigate('/')}
          onClick={() => navigate('/')}
          src={logo}
          alt="logo"
        />
      </NavHashLink>
      <FontAwesomeIcon
        onClick={() => handleClickShowNavMobile(true)}
        className="faIcon"
        icon={faBars}
      />
    </div>
  );
}
