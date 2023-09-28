import BlogArticlesList from '@components/Blog/BlogArticlesList';
import '@assets/css/page/blog/blogSection.scss';
import { useTranslation } from 'react-i18next';

export default function BlogSection({ categoryid }) {
  const { t } = useTranslation(); // Importation de la traduction
  return (
    <section className="blog">
      <h2>
        {t('blog_section_t1', { defaultValue: 'Nos dernières actualités' })}
      </h2>
      <p>
        {t('blog_section_t2', {
          defaultValue:
            'Découvrez nos dernières actualités à travers les articles de notre blog',
        })}
      </p>
      <BlogArticlesList categoryid={categoryid} />
    </section>
  );
}
