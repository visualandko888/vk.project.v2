import { Link, useNavigate } from 'react-router-dom';
import '@assets/css/page/home/bpi.scss';
import icAppointement from '@assets/images/ic-appointment.svg';
import icGoogleAds from '@assets/images/ic-google-ads.svg';
import icWebUnivers from '@assets/images/ic-web-univers.svg';
import { useTranslation } from 'react-i18next';

export default function Bpi() {
  const { t } = useTranslation(); // Importation de la traduction
  const navigate = useNavigate();

  const goto = (url) => {
    navigate(url);
  };

  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };
  return (
    <div className="info-nav-section">
      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => goto('/google-ads')}
        onClick={() => goto('/google-ads')}
        className="box-pj"
      >
        <Link className="back-j" to="/google-ads">
          <img src={icGoogleAds} className="faIcon" alt="google ads" />
          <span>{t('home_bpi_t1', { defaultValue: 'Google' })}</span>
          <span>{t('home_bpi_t2', { defaultValue: 'ADS' })}</span>
        </Link>
      </div>

      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => goto('/developpement-web')}
        onClick={() => goto('/developpement-web')}
        className="box-pj"
      >
        <Link className="back-j" to="/developpement-web">
          <img src={icWebUnivers} className="faIcon" alt="webUnivers" />
          <span>{t('home_bpi_t3', { defaultValue: 'Développement' })}</span>
          <span>{t('home_bpi_t4', { defaultValue: 'WEB' })}</span>
        </Link>
      </div>

      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => goto('/developpement-web#maintenance')}
        onClick={() => goto('/developpement-web#maintenance')}
        className="box-pj"
      >
        <Link className="back-j" to="/developpement-web#maintenance">
          <img src={icWebUnivers} className="faIcon" alt="maintenance" />
          <span>{t('home_bpi_t5', { defaultValue: 'Maintenance' })}</span>
          <span>{t('home_bpi_t6', { defaultValue: 'Sécurité' })}</span>
        </Link>
      </div>

      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => showCalendar()}
        onClick={() => showCalendar()}
        className="box-pj colored"
      >
        <Link className="back-j" to="/#">
          <img src={icAppointement} className="faIcon" alt="appointment" />
          <span>{t('home_bpi_t7', { defaultValue: 'Prendre' })}</span>
          <span>{t('home_bpi_t8', { defaultValue: 'RDV' })}</span>
        </Link>
      </div>
    </div>
  );
}
