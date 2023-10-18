import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import icPlusCircle from '@assets/images/ic-plus-circle.svg';
import icSocialAds from '@assets/images/ic-social-ads.svg';
import { useTranslation } from 'react-i18next';
import leftIcoDevWeb from '@assets/images/left-ico-dev-web.svg';
import leftIcoGoogleAds from '@assets/images/left-ico-google-ads.svg';
import leftIcoCalendar from '@assets/images/left-ico-calendar.svg';
import ArrowRight from '@assets/images/arrow-right.svg';
import ArrowBottom from '@assets/images/arrow-bottom.svg';

export default function NavLeft({handleHoverLeftNav, handleHoverShowNavLeft}) {
  const { t } = useTranslation(); // Importation de la traduction
  const navLeftElements = [
    {
      name: 'Développement WEB',
      url: '/developpement-web',
      icon: leftIcoDevWeb,
      translate_var: 'developpement-web',
      sublist: [
        {
          name: 'Création de site Internet',
          translate_var: 'web-site',
          url: '#',
        },
        {
          name: 'UX/UI/Web Design',
          translate_var: 'web-design',
          url: '#uxui',
        },
        {
          name: 'Maintenance sécurité',
          translate_var: 'maintenance-securite',
          url: '#maintenance',
        },
      ]
    },
    {
      name: 'Google Ads',
      url: '/google-ads',
      icon: leftIcoGoogleAds,
      translate_var: 'google-ads',
    },
    {
      name: 'Référencement Naturel',
      url: '/referencement-naturel',
      icon: icSocialAds,
      translate_var: 'referencement-naturel',
    },
    {
      name: 'Prendre rendez-vous',
      url: '#',
      icon: leftIcoCalendar,
      translate_var: 'prendre-rendez-vous',
      isCalendar: true,
    },
    {
      name: 'Demander un devis',
      modal: true,
      url: '/#contact',
      icon: icPlusCircle,
      translate_var: 'demander-un-devis',
    },
  ];

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const [currentSubElement, setCurrentSubElement] = useState(0);

  const handleHoverSubElements = (index) => {
    setCurrentSubElement(index);
  }
  const leaveNavLeft = () => {
    handleHoverLeftNav(false);
    setCurrentSubElement(0);
  }

  useEffect(() => {
    setCurrentPage(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };
  return (
    <div
      onMouseLeave={() => leaveNavLeft()}
      className={`navLeft ${handleHoverShowNavLeft ? 'show' : 'unshow'}`}
    >
      <ul>
        {navLeftElements.map((e, index) => (
          <div 
          onClick={() => handleHoverSubElements(currentSubElement === index+1 ? 0 : index+1)}             
          onKeyDown={() => handleHoverSubElements(0)}
          >
          <li
            role="button"
            tabIndex={0}
            key={index}
            onClick={e.isCalendar ? () => showCalendar(true) : null}
            onKeyDown={e.isCalendar ? () => showCalendar(true) : null}
            className={e.url === currentPage ? 'active' : null}           
          >
            <NavHashLink key={index} to={`${e.url}`}>
              <img
                onMouseEnter={() => handleHoverLeftNav(true)}
                className={`faIcon br${index}`}
                alt={e.name}
                src={e.icon}
              />
              {t(`layout_navigation_${e.translate_var}`, {
                defaultValue: e.name,
              })}
              {e.sublist &&
              <img 
                className='showIcon'
                src={currentSubElement === index+1 ? ArrowBottom : ArrowRight} 
              />
              }
            </NavHashLink>
          </li>
          {e.sublist && currentSubElement === index+1 &&
              e.sublist.map((sub, index) => (
              <li
              role="button"
              tabIndex={0}
              key={index}
              >
                <NavHashLink key={index} to={`${e.url}${sub.url}`}>
                  {t(`layout_navigation_${e.translate_var}`, {
                  defaultValue: sub.name,
                  })}
                </NavHashLink>
              </li>
              ))}
          </div>
        ))}
      </ul>
    </div>
  );
}
