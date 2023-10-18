import logo from '@assets/images/logo.svg';
import { useTranslation } from 'react-i18next';
import { NavHashLink } from 'react-router-hash-link';

export default function SubServices({ currentNavHover, setCurrentNavHover }) {
  const handleBackClick = () => {
    setCurrentNavHover(0);
  };

  const { t } = useTranslation(); // Importation de la traduction

  return (
    <div className={`${currentNavHover === 1 ? 'show' : 'unshow'} subServices`}>
      <div
        role="button"
        onClick={handleBackClick}
        onKeyDown={handleBackClick}
        tabIndex={0}
        className="back"
      >
        {' '}
      </div>
      <div className="left">
        <h1>
          <img src={logo} alt="logo" />
        </h1>
        <h2>
          {t('layout_navigation_nos-services', {
            defaultValue: 'NOS SERVICES',
          }).toUpperCase()}
        </h2>

        <ul>
          <li>
            <NavHashLink onClick={handleBackClick} to="/developpement-web">
              {t('layout_navigation_developpement-web', {
                defaultValue: 'Développement Web',
              })}
            </NavHashLink>
            <ul>
              <li>
                <NavHashLink
                  onClick={handleBackClick}
                  to="/developpement-web#creation"
                >
                  {t('layout_navigation_creation-de-site', {
                    defaultValue: 'Création de site',
                  })}
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  onClick={handleBackClick}
                  to="/developpement-web#uxui"
                >
                  {t('layout_navigation_ux', {
                    defaultValue: 'UX / UI / Web Design',
                  })}
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  onClick={handleBackClick}
                  to="/developpement-web#maintenance"
                >
                  {t('layout_navigation_maintenance-et-securite', {
                    defaultValue: 'Maintenance et sécurité',
                  })}
                </NavHashLink>
              </li>
            </ul>
          </li>
          <li>
            <NavHashLink onClick={handleBackClick} to="/referencement-naturel">
              {t('layout_navigation_seo', {
                defaultValue: 'SEO - Référencement Naturel',
              })}
            </NavHashLink>
          </li>
          <li>
            <NavHashLink onClick={handleBackClick} to="/referencement-payant">
              {t('layout_navigation_sea', {
                defaultValue: 'SEA - Référencement Payant',
              })}
            </NavHashLink>
          </li>
          <li>
            <NavHashLink onClick={handleBackClick} to="google-ads">
              {t('layout_navigation_google-ads', {
                defaultValue: 'Google Ads',
              })}
            </NavHashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
