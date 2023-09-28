import '@assets/css/page/pageErreur/page404.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import image404 from '@assets/lottie/404.json';
import { useNavigate } from 'react-router-dom';

export default function Page404() {
  const navigate = useNavigate();
  return (
    <section className="page404">
      <Player className="lottie" autoplay loop src={image404} />
      <div className="text">
        <h1>Vous êtes arrivé(e) sur une page qui n'existe pas</h1>
        <p>
          Nous sommes désolés de vous avoir égaré(e). Veuillez utiliser les
          liens de navigation pour trouver votre chemin ou retourner à la page
          d'accueil. Nous ferons de notre mieux pour ne plus vous perdre à
          l'avenir.
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
