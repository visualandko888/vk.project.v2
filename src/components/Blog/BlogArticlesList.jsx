import { instanceAxios } from '@helpers/axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@assets/css/page/blog/blogArticlesList.scss';
import i18n from 'i18next';

export default function BlogArticlesList({ categoryid }) {
  const [articlesList, setArticlesList] = useState([]);
  const navigate = useNavigate();

  const handleClickNavigate = (id) => {
    navigate(`/blog/${id}`);
  };
  useEffect(() => {
    instanceAxios()
      .get(
        `get_blog_article.php?${
          categoryid > 0 ? `categoryid=${categoryid}` : ''
        }&lang=${i18n.language}`,
      )
      .then((res) => {
        if (res.data.success && res.data.type === 'list') {
          setArticlesList(res.data.results);
        }
      })
      .catch(() => {});
  }, [i18n.language]);
  return (
    <div className="articlesList">
      {articlesList.slice(0, 4).map((e, index) => (
        <div
          key={index}
          role="button"
          tabIndex={0}
          onClick={() => handleClickNavigate(e.id)}
          onKeyDown={() => handleClickNavigate(e.id)}
          read_duration={`${e.read_duration} min`}
          className={`card article${index + 1}`}
        >
          <img
            alt={`blog ${index}`}
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/blogs/${
              e.img_primary
            }`}
          />
          <h3>{e.title}</h3>
        </div>
      ))}
    </div>
  );
}
