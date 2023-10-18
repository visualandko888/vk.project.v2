import { useState, useEffect } from 'react';
import '@assets/css/page/webDeveloppement/hero.scss';
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
    // }, 5000);
  }, []);

  return (
    <div
      style={{
        backgroundImage: loadHeroBg
          ? `url(${window.innerWidth > 1215 ? heroBg : heroBgResp})`
          : '',
      }}
      className={`webHero ${loadHeroBg ? '' : 'loaderElement'}`}
    >
      {loadHeroBg && (
        <>
          <h1>
            {t('webDeveloppement_hero_t1', {
              defaultValue: 'Développement Web',
            })}
          </h1>
          <p>
            {t('webDeveloppement_hero_t2', {
              defaultValue: 'Visual&Ko, votre partenaire de confiance dans le',
            })}
            <br />
            {' '}
            {t('webDeveloppement_hero_t3', {
              defaultValue: 'monde dynamique du marketing digital.',
            })}
            {' '}
          </p>
          <p>
            {t('webDeveloppement_hero_t4', { defaultValue: 'Votre Passage' })}
            {windowSize < 900 ? <br /> : ' '}
            {t('webDeveloppement_hero_t5', { defaultValue: 'Vers le' })}
            {' '}
            <span>
              {t('webDeveloppement_hero_t6', {
                defaultValue: 'Succès Numérique',
              })}
            </span>
          </p>
        </>
      )}
    </div>
  );
}
