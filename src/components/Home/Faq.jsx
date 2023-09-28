import { instanceAxios } from '@helpers/axios';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import '@assets/css/page/home/faq.scss';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Faq() {
  const { t } = useTranslation(); // Importation de la traduction
  const [fakeFaq, setFakeFaq] = useState([]);
  useEffect(() => {
    instanceAxios()
      .get(`get_faq.php?lang=${i18n.language}`)
      .then((res) => {
        if (res.data.success) {
          setFakeFaq(res.data.results);
        }
      })
      .catch(() => {});
  }, [i18n.language]);

  const showCard = (index) => {
    const updateFaq = { ...fakeFaq[index], show: !fakeFaq[index].show };
    const newFaq = [
      ...fakeFaq.slice(0, index),
      updateFaq,
      ...fakeFaq.slice(index + 1),
    ];
    setFakeFaq(newFaq);
  };
  return (
    <section className="faq">
      <div className="content">
        <h2>
          {t('home_faq_t1', { defaultValue: 'FAQ - Questions fréquentes' })}
        </h2>

        <div className="faqList">
          {fakeFaq.map((e, index) => (
            <div key={index} className="group">
              <div
                type="button"
                role="button"
                tabIndex={0}
                onKeyDown={() => showCard(index)}
                onClick={() => showCard(index)}
                className="item"
              >
                <h3>{e.title}</h3>
                <FontAwesomeIcon
                  className="faIcon"
                  icon={e.show ? faMinusCircle : faPlusCircle}
                />
              </div>
              <div
                className={`card ${e.show ? 'open' : null}`}
                dangerouslySetInnerHTML={{ __html: e.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
