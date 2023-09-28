import { useRef, useState, useEffect } from 'react';
import '@assets/css/page/SEO/section5.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Section5() {
  const { t } = useTranslation(); // Importation de la traduction
  const [dotTop, setDotTop] = useState('0');
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const elementRef = useRef(null);
  const elementRefP1 = useRef(null);
  const elementRefP2 = useRef(null);
  const elementRefT2 = useRef(null);
  const elementRefD1 = useRef(null);

  const checkPosition = () => {
    const element = elementRef.current;
    const elementP1 = elementRefP1.current;
    const elementP2 = elementRefP2.current;
    const elementT2 = elementRefT2.current;
    const elementD1 = elementRefD1.current;

    const rect = element.getBoundingClientRect();
    const rectP1 = elementP1.getBoundingClientRect();
    const rectP2 = elementP2.getBoundingClientRect();
    const rectT2 = elementT2.getBoundingClientRect();

    const sTop = rect.top;
    const p1Top = rectP1.top - sTop;
    const p1Height = elementP1.clientHeight;
    const p2Top = rectP2.top - sTop;
    const p2Height = elementP2.clientHeight;
    const t2Top = rectT2.top - sTop;
    const d1Height = elementD1.clientHeight;

    const posP1_1 = p1Top + p1Height;
    const posP1 = posP1_1 + (p2Top - posP1_1) / 2 - d1Height / 2;

    const posP2_1 = p2Top + p2Height;
    const posP2 = posP2_1 + (t2Top - posP2_1) / 2 - d1Height / 2;

    if (element) {
      const elementTop = rect.top;
      if (elementTop > 150) {
        setDotTop('0px');
      } else if (elementTop > -250) {
        setDotTop(`${posP1}px`);
      } else {
        setDotTop(`${posP2}px`);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
      // console.log(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={elementRef} className="section5">
      <div ref={elementRefD1} style={{ top: dotTop }} className="dot" />
      <div className="trait" />
      <p ref={elementRefP1}>
        {t('seo_section5_t1', {
          defaultValue:
            'Explorez comment notre service de marketing digital intègre harmonieusement',
        })}
        {' '}
        <b>{t('seo_section5_t2', { defaultValue: 'innovation' })}</b>
        {' '}
        ,
        {' '}
        <span className="font">
          {t('seo_section5_t3', { defaultValue: 'esthétisme' })}
        </span>
        {' '}
        {t('seo_section5_t4', { defaultValue: 'et' })}
        <b>
          {' '}
          {t('seo_section5_t5', { defaultValue: 'fonctionnalité' })}
        </b>
        {' '}
        {t('seo_section5_t6', {
          defaultValue:
            'pour revitaliser votre présence en ligne. Plongez dans une',
        })}
        <strong>
          {' '}
          {t('seo_section5_t7', {
            defaultValue: 'ère nouvelle de visibilité en ligne',
          })}
        </strong>
        {' '}
        {t('seo_section5_t8', {
          defaultValue:
            'en explorant notre expertise en SEO, une composante essentielle de notre offre.',
        })}
        {' '}
      </p>
      <p ref={elementRefP2}>
        {t('seo_section5_t9', {
          defaultValue:
            'Nous vous invitons à découvrir comment notre approche en matière de référencement naturel peut',
        })}
        {' '}
        <strong>
          {t('seo_section5_t10', {
            defaultValue: 'propulser votre entreprise',
          })}
        </strong>
        {' '}
        {t('seo_section5_t11', {
          defaultValue:
            'vers de nouveaux horizons, en accordant une attention minutieuse aux détails qui font toute la différence dans le monde numérique',
        })}
        <span className="bulle">
          {t('seo_section5_t12', { defaultValue: 'en constante évolution.' })}
        </span>
      </p>
      <div ref={elementRefT2} className="trait2" />
      <FontAwesomeIcon className="faIcon" icon={faChevronDown} />
    </section>
  );
}
