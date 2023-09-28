import { instanceAxios } from '@helpers/axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '@assets/css/page/realisation/realisation.scss';
import '@assets/css/page/realisation/hero.scss';
import '@assets/css/page/realisation/presentation.scss';
import '@assets/css/page/realisation/overview2.scss';
import ProjectsSlider from '@components/Home/RealisationsSlider';
import HelmetMeta from '@components/Helmet/HelmetMeta';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function RealisationItem() {
  const { t } = useTranslation(); // Importation de la traduction
  const { id } = useParams();
  const navigate = useNavigate();
  const [realisationDetails, setRealisationDetails] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [realisationSection, setRealisationSection] = useState([]);

  const title = t('helmet_resalisationId_t1', {
    defaultValue:
      'Réalisations | Visual & Ko - Création, maintenance et sécurité de sites internet performants',
  });
  const description = t('helmet_resalisationId_t2', {
    defaultValue:
      'Visual & Ko vous propose des services web complets pour la création de sites internet professionnels, la maintenance et la sécurité de votre site existant. Nous sommes également spécialisés en référencement naturel pour améliorer votre visibilité en ligne. Contactez-nous dès maintenant !',
  });
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    instanceAxios()
      .get(`get_realisation_sections.php?realisationId=${id}`)
      .then((res) => {
        if (res.data.success && res.data.type === 'item') {
          setRealisationSection(res.data.results);
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          navigate('/404');
        }
      });
  }, [id]);

  useEffect(() => {
    instanceAxios()
      .get(`get_realisation.php?realisationId=${id}&lang=${i18n.language}`)
      .then((res) => {
        if (res.data.success && res.data.type === 'item') {
          setRealisationDetails(res.data.results);
          const expertiseList = res.data.results.expertise;
          setExpertise(expertiseList.split(';'));
        } else {
          navigate('/404');
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          navigate('/404');
        }
      });
  }, [id, i18n.language]);
  return (
    <main>
      <HelmetMeta title={title} description={description} />
      <section
        className="heroRealisation"
        style={{
          backgroundImage: `url("${
            import.meta.env.VITE_BACKEND_URL
          }/uploads/realisations/${realisationDetails.hero_bg}")`,
        }}
      >
        <div className="content">
          <div className="head">
            <h2>{realisationDetails.title}</h2>
            <h3>{realisationDetails.sub_title}</h3>
          </div>
        </div>
        <div
          className="circle"
          style={{
            backgroundImage: `url("${
              import.meta.env.VITE_BACKEND_URL
            }/uploads/realisations/${realisationDetails.logo}`,
          }}
        />
      </section>
      <section className="realPresentation">
        <h3>{t('project_t1', { defaultValue: 'Le projet' })}</h3>
        <div className="expertsList">
          {expertise.map((e) => (
            <div className="expertItem">{e}</div>
          ))}
        </div>
        <p>{realisationDetails.description}</p>
      </section>
      {realisationSection.map((e, index) => (
        <section
          data-aos="fade-up"
          data-aos-duration="1100"
          className="overview2"
        >
          <img
            alt="overview"
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/realisations/${
              e.img
            }`}
          />
          <div>
            {/* <div
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                            className="sectionDescription"
                        >
                            <h3>{e.title}</h3>
                            {e.text}
                        </div> */}
            <div
              data-aos={`fade-${index % 2 ? 'right' : 'down'}`}
              data-aos-duration="1500"
              className="overviewMobile"
            >
              <img
                alt="fake mobile"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/uploads/realisations/${e.img_mobile}`}
              />
            </div>
          </div>
        </section>
      ))}
      <ProjectsSlider />
    </main>
  );
}
