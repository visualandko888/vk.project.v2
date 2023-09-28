import { instanceAxios } from '@helpers/axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BlogArticlesList from '@components/Blog/BlogArticlesList';
import '@assets/css/page/blog/blogArticle.scss';
import '@assets/css/page/blog/othersArticles.scss';
import HelmetMeta from '@components/Helmet/HelmetMeta';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function BlogId() {
  const { t } = useTranslation(); // Importation de la traduction
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    instanceAxios()
      .get(`get_blog_article.php?articleid=${id}&lang=${i18n.language}`)
      .then((res) => {
        if (res.data.success && res.data.type === 'article') {
          setBlogDetails(res.data.results);
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

  const title = t('helmet_blog_t1', {
    defaultValue:
      'Blog | Visual & Ko - Création, maintenance et sécurité de sites internet performants',
  });
  const description = t('helmet_blog_t2', {
    defaultValue:
      'Visual & Ko vous propose des services web complets pour la création de sites internet professionnels, la maintenance et la sécurité de votre site existant. Nous sommes également spécialisés en référencement naturel pour améliorer votre visibilité en ligne. Contactez-nous dès maintenant !',
  });
  return (
    <main>
      <HelmetMeta title={title} description={description} />
      <section className="blogArticle">
        <div className="blogArticleHead">
          <h2>{blogDetails.title}</h2>
          <p>{blogDetails.text_primary}</p>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/blogs/${
              blogDetails.img_primary
            }`}
            alt="principal"
          />
          <p>{blogDetails.text_secondary}</p>
        </div>
        <div className="blogArticleSection">
          <div className="sectionBody">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/blogs/${
                blogDetails.img_s1
              }`}
              alt="section 1"
            />
            <div className="text">
              <h3>{blogDetails.title_s1}</h3>
              <p>{blogDetails.text_s1}</p>
            </div>
          </div>
        </div>
        <div className="blogArticleSection">
          <div className="sectionBody">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/blogs/${
                blogDetails.img_s2
              }`}
              alt="section 2"
            />
            <div className="text">
              <h3>{blogDetails.title_s2}</h3>
              <p>{blogDetails.text_s2}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="othersArticles">
        <h2>{t('blog_section_t3', { defaultValue: 'Nos autres articles' })}</h2>
        <BlogArticlesList />
      </section>
    </main>
  );
}
