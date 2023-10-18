import logo from '@assets/images/logo_blue.svg';
import { useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import MenuFries from '@assets/images/menu-fries-right.svg'

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
      <img src={MenuFries}
        onClick={() => handleClickShowNavMobile(true)}
        className="Icon"
      />
    </div>
  );
}
