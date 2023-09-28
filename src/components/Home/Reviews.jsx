import '@assets/css/page/home/reviews.scss';
import imgQuote from '@assets/images/dubbleQuotes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import reviewList from '@assets/datas/reviews.json';

export default function Reviews() {
  const { t } = useTranslation(); // Importation de la traduction

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [numberReviewShow, setNumberReviewShow] = useState(0);
  const [ratingTotal, setRatingTotal] = useState(0);
  const [reviewsList, setReviewsList] = useState([]);
  const [classList, setClassList] = useState([]);
  const [countReview, setCountReview] = useState(0);

  useEffect(() => {
    if (numberReviewShow > 0) {
      const reviewsArr = reviewList.result.reviews;
      setCountReview(reviewsArr.length);
      reviewsArr.sort((a, b) => b.time - a.time);

      let totalRate = 0;
      for (let i = 0; i < reviewsArr.length; i++) {
        totalRate += reviewsArr[i].rating;
      }

      totalRate /= reviewsArr.length;
      setRatingTotal(Math.round(totalRate));

      const prepArr = [];

      for (let i = 0; i < reviewsArr.length; i += numberReviewShow) {
        const sousTableau = reviewsArr.slice(i, i + numberReviewShow);
        prepArr.push(sousTableau);
      }

      const prepArrClass = [];
      for (let i = 0; i < prepArr.length; i++) {
        prepArrClass.push(i === 0 ? 'show' : 'unshow');
      }

      setClassList(prepArrClass);
      setReviewsList(prepArr);
    }
  }, [numberReviewShow]);

  useEffect(() => {
    if (windowSize < 1050) {
      if (numberReviewShow !== 1) {
        setNumberReviewShow(1);
      }
    } else if (windowSize < 1600) {
      if (numberReviewShow !== 2) {
        setNumberReviewShow(2);
      }
    } else if (numberReviewShow !== 3) {
      setNumberReviewShow(3);
    }
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timerID = setInterval(() => {
      setClassList((prevArr) => {
        const newArr = [...prevArr];
        newArr.unshift(newArr[newArr.length - 1]);
        newArr.pop();
        return newArr;
      });
    }, 10000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  return (
    <section className="reviews">
      <h2>{t('home_reviews_t1', { defaultValue: 'Ils nous ont écrit' })}</h2>
      <p>
        {t('home_reviews_t2', {
          defaultValue: 'Découvrez nos derniers avis Google',
        })}
      </p>
      <div className="reviewsRating">
        <FontAwesomeIcon
          className={`faIcon ${ratingTotal >= 1 ? 'active' : ''}`}
          icon={faStar}
        />
        <FontAwesomeIcon
          className={`faIcon ${ratingTotal >= 2 ? 'active' : ''}`}
          icon={faStar}
        />
        <FontAwesomeIcon
          className={`faIcon ${ratingTotal >= 3 ? 'active' : ''}`}
          icon={faStar}
        />
        <FontAwesomeIcon
          className={`faIcon ${ratingTotal >= 4 ? 'active' : ''}`}
          icon={faStar}
        />
        <FontAwesomeIcon
          className={`faIcon ${ratingTotal === 5 ? 'active' : ''}`}
          icon={faStar}
        />
        (
        {countReview}
        {' '}
        avis)
      </div>
      <div className="reviewContent">
        {reviewsList.map((elem, index) => (
          <div key={elem[0].text} className={`reviewsList ${classList[index]}`}>
            {elem.map((e, i) => (
              <div key={i} className="reviewsCard">
                <div className="reviewsBody">
                  <div className="reviewsCircle">
                    <img src={imgQuote} alt="guillemets" />
                  </div>
                  <p className={`${e.text.length > 350 && 'min'}`}>
                    “
                    {e.text}
                    ”
                  </p>
                </div>

                <div className="reviewsBottom">
                  <div className="reviewsRate">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <span>—</span>
                  <div className="reviewsAuthor">
                    {e.author_name.length > 18
                      ? `${e.author_name.substring(0, 18)}...`
                      : e.author_name}
                  </div>
                </div>

                <div className="reviewsCache1" />
                <div className="reviewsCache2" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
