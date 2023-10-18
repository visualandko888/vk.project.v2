import { useState, useEffect } from 'react';
import '@assets/css/page/gads/hero.scss';
import '@assets/css/elements/loaderElement.scss';
import { useTranslation } from 'react-i18next';
import heroBg from '@assets/images/webhero.svg';
import heroBgResp from '@assets/images/hero-bg-resp.jpg';

export default function Hero() {
  const { t } = useTranslation(); // Importation de la traduction
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [loadHeroBg, setLoadHeroBg] = useState(false);
  useEffect(() => {
    const heroBgHight = new Image();
    heroBgHight.src = window.innerWidth > 1215 ? heroBg : heroBgResp;
    heroBgHight.onload = () => {
      setLoadHeroBg(true);
    };

    // setTimeout(() => {
    //   setLoadHeroBg(true);
    // }, 50000);
  }, []);
  return (
    <div
      style={{
        backgroundImage: loadHeroBg
          ? `url(${window.innerWidth > 1215 ? heroBg : heroBgResp})`
          : '',
      }}
      className={`webHero2 ${loadHeroBg ? '' : 'loaderElement'}`}
    >
      {loadHeroBg && (
        <>
          <h1>
            {t('gads_hero_t1', {
              defaultValue: 'Exploitez le plein potentiel',
            })}
            <br />
            {' '}
            {t('gads_hero_t2', { defaultValue: 'de Google Ads' })}
          </h1>
          <p>
            {t('gads_hero_t3', {
              defaultValue:
                "Visual&Ko, votre guide incontournable dans l'art complexe",
            })}
            <br />
            {' '}
            {t('gads_hero_t4', { defaultValue: 'de la publicité en ligne' })}
            {' '}
          </p>
          <p>
            {t('gads_hero_t5', { defaultValue: 'Votre' })}
            {' '}
            <span>
              {t('gads_hero_t6', { defaultValue: 'Réussite Numérique' })}
            </span>
            {windowSize < 900 ? <br /> : ' '}
            {' '}
            {t('gads_hero_t7', { defaultValue: 'Commence Ici' })}
          </p>
        </>
      )}
    </div>
  );
}
