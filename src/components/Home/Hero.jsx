// UTILS
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import facebooksvg from '@assets/images/facebook.svg';
import instagramsvg from '@assets/images/instagram.svg';
import linkedinsvg from '@assets/images/linkedin.svg';

// IMAGES
import '@assets/css/page/home/hero.scss';

export default function Hero() {
  const { t } = useTranslation(); // Importation de la traduction

  const textCircleArr = [
    'WEB',
    'Google Ads',
    'SEO',
    'SEA',
    'Maintenance',
    'Sécurité',
  ];
  const [frame, setFrame] = useState(0);
  const [textCirclePos, setTextCirclePos] = useState(0);
  const [textCircle1, setTextCircle1] = useState(textCircleArr[0]);
  const [textCircle2, setTextCircle2] = useState(textCircleArr[1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextCirclePos((prevPos) => (prevPos === textCircleArr.length - 1 ? 0 : prevPos + 1));
      setFrame((prevFrame) => (prevFrame === 1 ? 0 : 1));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [textCirclePos]);

  useEffect(() => {
    if (textCirclePos % 2 === 0) {
      setTextCircle1(textCircleArr[textCirclePos]);
    } else {
      setTextCircle2(textCircleArr[textCirclePos]);
    }
  }, [textCirclePos]);

  return (
    <div className={`hero frame${frame}`}>
      <div className="left">
        <div className="circle circle-1">
          <p className={textCircle1.length > 10 ? 'small' : ''}>
            {textCircle1}
          </p>
        </div>
        <div className="circle circle-2">
          <p className={textCircle2.length > 10 ? 'small' : ''}>
            {textCircle2}
          </p>
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h1>
            {t('home_hero_t1', {
              defaultValue: 'Votre Agence à',
            })}
            <br />
            {t('home_hero_t2', {
              defaultValue: 'Paris',
            })}
            {' '}
            <span>
              {t('home_hero_t3', {
                defaultValue: 'experte en',
              })}
            </span>
          </h1>
          <h2>
            {t('home_hero_t4', {
              defaultValue: 'MARKETING DIGITAL',
            })}
          </h2>
          <div>
            <span>
              {t('home_hero_t5', {
                defaultValue: "Besoin d'un conseil ?",
              })}
            </span>
            <span>
              {t('home_hero_t6', {
                defaultValue: 'Vous avez une idée de projet web ?',
              })}
            </span>
          </div>

          <NavHashLink to="/#contact">
            <button type="button">
              {t('home_hero_t7', {
                defaultValue: 'Contactez-nous !',
              })}
            </button>
          </NavHashLink>
        </div>
      </div>
      <div className="fixButton">
        <div className="left">
          <ul>
            <li>
              <Link to="https://www.facebook.com/visulaandko">
                <img alt="facebook logo" src={facebooksvg} />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/visualandko/">
                <img alt="instagram logo" src={instagramsvg} />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/19092513/admin/feed/posts/?feedType=following">
                <img alt="instagram logo" src={linkedinsvg} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="right" />
      </div>
    </div>
  );
}
