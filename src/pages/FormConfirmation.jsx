import { Helmet } from 'react-helmet';
import '@assets/css/page/pageErreur/page404.scss';
import '@assets/css/page/formConfirmation.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import isSend from '@assets/lottie/isSend.json';
import { useNavigate } from 'react-router-dom';

export default function FormConfirmation() {
  const navigate = useNavigate();
  return (
    <section className="page404">
      <Helmet>
        <script>
          {`
                 window.dataLayer = window.dataLayer || [];
                 function gtag() { dataLayer.push(arguments) };
                 gtag('js', new Date());
                 gtag('config', 'AW-11374851460');
            `}
        </script>
      </Helmet>
      <Player className="lottie" autoplay loop src={isSend} />
      <div className="text">
        <h1>Nous avons bien reçu votre demande !</h1>
        <p>
          Nous tenons à vous informer que votre demande a été réceptionnée avec
          succès. Notre équipe est déjà à pied d'œuvre pour l'examiner avec
          toute l'attention qu'elle mérite, et nous vous assurons que nous
          mettrons tout en œuvre pour résoudre votre problème ou répondre à vos
          questions de manière efficace et professionnelle. Votre satisfaction
          est notre objectif premier, et nous vous remercions de votre confiance
          en nos services.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="btn primary"
        >
          Retour à l'accueil
        </button>
      </div>
    </section>
  );
}
