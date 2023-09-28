import SeoIcon from '@assets/images/card-seo-icone.svg';
import SeaIcon from '@assets/images/card-sea-icone.svg';
import GoogleIcon from '@assets/images/card-google-icone.png';
import WebsiteIcon from '@assets/images/card-website-icone.svg';
import UxDesignIcon from '@assets/images/card-uxdesign-icone.svg';
import SecurityIcon from '@assets/images/card-security-icone.png';
import SpinningArrow from '@assets/images/vector-spinning-arrow.png';
import ButtonForm from '@assets/images/bouton-services-form.png';
import '@assets/css/page/home/services.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ModalCard from '@components/Elements/ModalCard';
import arrow_right from '@assets/images/arrow_right.png';
import { useNavigate, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

export default function Services() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Importation de la traduction
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isClick, setIsClick] = useState(false);
  const [currentShow, setCurrentShow] = useState([]);
  const [currentType, setCurrentType] = useState(1);
  const serviceList = [
    {
      title: 'Développement Web',
      subtitle: 'Création de sites',
      desc: 'Création unique et sur-mesure de sites vitrine et de e-commerce responsives',
      url: '/developpement-web#creation',
      img: WebsiteIcon,
      id: 4,
    },
    {
      title: 'UX/UI/Web Design',
      subtitle: 'Amélioration interfaces',
      desc: 'Se distinguer avec des interfaces attrayantes, performantes et fonctionnelles',
      url: '/developpement-web#uxui',
      img: UxDesignIcon,
      id: 5,
    },
    {
      title: 'Google Ads',
      subtitle: 'Plateforme publicitaire',
      desc: 'Diffuser vos publicités sur le réseau Display de Google et autres sites associés',
      url: '/google-ads',
      img: GoogleIcon,
      id: 3,
    },
    {
      title: 'SEA',
      subtitle: 'Référencement payant',
      desc: 'Augmentez rapidement la notoriété et visibilité de votre marque',
      url: '/referencement-payant',
      img: SeaIcon,
      id: 2,
    },
    {
      title: 'SEO',
      subtitle: 'Référencement naturel',
      desc: 'Augmentez la visibilité de votre site en optimisant votre contenu',
      url: '/referencement-naturel',
      img: SeoIcon,
      id: 1,
    },
    {
      title: 'Maintenance sécurité',
      subtitle: 'Surveillance - Résolution',
      desc: "S'assurer que votre site soit toujours fonctionnel, sécurisé et à jour",
      url: '/developpement-web#maintenance',
      img: SecurityIcon,
      id: 6,
    },
  ];
  const handleClick = (type, index) => {
    setIsClick(type);
    if (index > 0) {
      setCurrentShow(serviceList[index - 1]);
      setCurrentType(
        index - 1 === 0 || index - 1 === 3 || index - 1 === 4 ? 1 : 2,
      );
    }
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goTo = (url) => {
    navigate(url);
  };
  const serviceListBg = [
    'bg-white',
    'bg-blue',
    'bg-blue',
    'bg-white',
    'bg-white imgcenter',
    'bg-blue imgcenter',
  ];

  return (
    <section id="services" className="services">
      <h2>
        {t('home_services_t1', { defaultValue: 'Nos offres et services' })}
      </h2>

      <div className="columns">
        <div className="servicesList">
          {serviceList.map((e, index) => (
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {
                handleClick(true, index + 1);
                if (windowSize > 768) {
                  goTo(e.url);
                }
              }}
              onClick={() => {
                handleClick(true, index + 1);
                if (windowSize > 768) {
                  goTo(e.url);
                }
              }}
              key={index}
              className="card"
            >
              <div className={`flip-card-inner ${serviceListBg[index]}`}>
                <div className="card-front">
                  {/* <img src={serviceImg} alt={`service ${index}`} /> */}
                  <img className="serviceImg" src={e.img} alt="serviceImg" />
                  <div className="serviceTitles">
                    <h3>
                      {t(`home_services_card_title${index + 1}`, {
                        defaultValue: e.title,
                      })}
                    </h3>
                    <p>
                      {windowSize > 768 && (
                        <>
                          {t(`home_services_card_subtitle${index + 1}`, {
                            defaultValue: e.subtitle,
                          })}
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <p>
                    {t(`home_services_card_desc${index + 1}`, {
                      defaultValue: e.desc,
                    })}
                  </p>
                  <span>
                    <img src={arrow_right} alt="fleche" />
                    {' '}
                    {t('home_services_en-savoir-plus', 'En savoir plus')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="income">
          <h3>
            <span className="first_line">
              {t('home_services_t2', { defaultValue: 'Comment nous générons' })}
            </span>
            <span className="second_line">
              {t('home_services_t3', { defaultValue: 'des revenus' })}
            </span>
          </h3>
          <ul className="activities">
            <li>
              <span>
              {t('home_services_t4', {
                defaultValue: 'Création de sites optimisés',
              })}
              </span>
            </li>
            <li>
              <span>
              {t('home_services_t5', {
                defaultValue: 'Génération de traffic sur votre site',
              })}
              </span>
            </li>
            <li>
              <span>
              {t('home_services_t6', {
                defaultValue:
                  'Création et gérance de campagnes publicitaires puissantes',
              })}
              </span>
            </li>
            <li>
              <span>
              {t('home_services_t7', {
                defaultValue:
                  'Collecte, analyse et déploiement des données marketing',
              })}
              </span>
            </li>
            <li>
              <span>
              {t('home_services_t8', {
                defaultValue:
                  'Amélioration du message de marque et la conversion',
              })}
              </span>
            </li>
          </ul>
          <ul className="questions">
            <li>
              {t('home_services_t9', {
                defaultValue: "Envie d'améliorer vos performances ?",
              })}
            </li>
            <li className="specific-question">
              {t('home_services_t10', {
                defaultValue: 'Une idée de projet web ?',
              })}
            </li>
            <li>
              {t('home_services_t11', {
                defaultValue: "Besoin d'un conseil ?",
              })}
            </li>
          </ul>
          <div className="arrow-button">
            <NavHashLink to="/#contact">
              <img
                src={SpinningArrow}
                className="spinning_arrow"
                alt="flèche"
              />
              <img
                src={ButtonForm}
                className="service_to_form"
                alt="bouton vers le formulaire"
              />
            </NavHashLink>
          </div>
        </div>
      </div>
      {windowSize <= 768 && (
        <ModalCard
          handleClick={handleClick}
          classes={`type${currentType} ${isClick ? 'show' : 'unshow'}`}
        >
          <img className="serviceImg" src={currentShow.img} alt="serviceImg" />
          <h3>{currentShow.title}</h3>
          <h4>{currentShow.subtitle}</h4>
          <p>{currentShow.desc}</p>
          <Link to={currentShow.url}>
            <img src={arrow_right} alt="fleche" />
            {' '}
            {t('home_services_en-savoir-plus', 'En savoir plus')}
          </Link>
        </ModalCard>
      )}
    </section>
  );
}
