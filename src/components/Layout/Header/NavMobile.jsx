import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

export default function NavMobile({ showNavMobile, setShowNavMobile }) {
  const { t } = useTranslation(); // Importation de la traduction
  const navArr = [
    {
      name: "L'Agence",
      href: '/',
      classes: '',
      translate_var: 'accueil',
    },
    {
      name: 'Nos Services',
      href: '/#services',
      classes: '',
      translate_var: 'nos-services',
    },
    {
      name: 'Développement Web',
      href: '/developpement-web',
      classes: 'small',
      translate_var: 'developpement-web',
    },
    {
      name: 'SEO - Référencement Naturel',
      href: '/referencement-naturel',
      classes: 'small',
      translate_var: 'seo',
    },
    {
      name: 'SEA - Référencement Payant',
      href: '/referencement-payant',
      classes: 'small',
      translate_var: 'sea',
    },
    {
      name: 'Google Ads',
      href: '/google-ads',
      classes: 'small',
      translate_var: 'google-ads',
    },
    {
      name: 'Nos Projets',
      href: '/#projects',
      classes: '',
      translate_var: 'nos-projets',
    },
  ];
  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };
  return (
    <div className={`navMobile ${showNavMobile ? 'show' : 'unshow'}`}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => setShowNavMobile(false)}
        onClick={() => setShowNavMobile(false)}
        className="back"
      >
        {' '}
      </div>
      <div className="right">
        <div className="top">
          <FontAwesomeIcon
            onClick={() => setShowNavMobile(false)}
            className="faIcon"
            icon={faTimes}
          />
        </div>
        <div className="middle">
          <ul>
            <li>
              <a href="/espace-client/login">
                <FontAwesomeIcon className="faIcon" icon={faUserCircle} />
              </a>
            </li>
            {navArr.map((e) => (
              <li
                role="button"
                tabIndex={0}
                onKeyDown={() => {
                  setShowNavMobile(false);
                  if (e.isCalendar) {
                    showCalendar();
                  }
                }}
                onClick={() => {
                  setShowNavMobile(false);
                  if (e.isCalendar) {
                    showCalendar();
                  }
                }}
                className={e.classes}
              >
                <NavHashLink to={e.href}>
                  {t(`layout_navigation_${e.translate_var}`, {
                    defaultValue: e.name,
                  })}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="preBottom">
          <NavHashLink to="#">
            <div onKeyDown={() => showCalendar()} onClick={() => showCalendar()}>Prendre rendez-vous</div>
          </NavHashLink>
          <NavHashLink to="/home#contact">
            <div onClick={() => setShowNavMobile(false)}>Demander un devis</div>
          </NavHashLink>
        </div>
      </div>
    </div>
  );
}
