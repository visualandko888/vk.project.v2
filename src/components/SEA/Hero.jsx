import { useState, useEffect } from 'react';
import '@assets/css/page/SEA/hero.scss';
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
      className={`webHero4 ${loadHeroBg ? '' : 'loaderElement'}`}
    >
      {loadHeroBg && (
        <>
          <h1>
            {t('sea_hero_t1', { defaultValue: "Maîtrisez l'Art du SEA pour" })}
            {' '}
            <br />
            {t('sea_hero_t2', { defaultValue: 'un succès assuré' })}
          </h1>
          <p>
            {t('sea_hero_t3', {
              defaultValue:
                'Visual&Ko, votre solution pour des clics payants qui rapportent gros',
            })}
          </p>
          <p>
            {t('sea_hero_t4', { defaultValue: 'Votre voyage vers' })}
            {windowSize < 900 ? <br /> : ' '}
            {t('sea_hero_t5', { defaultValue: "l'" })}
            {' '}
            <span>
              {t('sea_hero_t6', { defaultValue: 'Amélioration en ligne' })}
            </span>
          </p>
        </>
      )}
    </div>
  );
}
