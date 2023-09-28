import Team from '@components/Home/Team';
import Hero from '@components/Home/Hero';
import Bpi from '@components/Home/Bpi';
import RealisationsSlider from '@components/Home/RealisationsSlider';
import Services from '@components/Home/Services';
import Faq from '@components/Home/Faq';
import Contact from '@components/Home/Contact';
import Reviews from '@components/Home/Reviews';
import BlogSection from '@components/Blog/BlogSection';
import Partenaires from '@components/Home/Partenaires';
import HelmetMeta from '@components/Helmet/HelmetMeta';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation(); // Importation de la traduction
  const title = t('helmet_home_t1', {
    defaultValue:
      'Accueil | Visual & Ko - Votre partenaire de confiance pour la création de sites web et la génération de leads',
  });
  const description = t('helmet_home_t2', {
    defaultValue:
      'Découvrez Visual & Ko, votre partenaire de confiance pour la création de sites internet professionnels, la maintenance et la sécurité de votre site, le référencement naturel et la génération de leads qualifiés. Contactez-nous dès maintenant pour booster votre présence en ligne !',
  });
  return (
    <main>
      <HelmetMeta title={title} description={description} />
      <Hero />
      <Bpi />
      <Team />
      <Services />
      <Partenaires />
      <RealisationsSlider />
      <Reviews />
      <Faq />
      <Contact />
      <BlogSection />
    </main>
  );
}
