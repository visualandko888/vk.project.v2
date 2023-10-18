import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { instanceAxios } from '@helpers/axios';
import '@assets/css/page/home/realisationSlider.scss';
import { useTranslation } from 'react-i18next';
import chevron from '@assets/images/chevron.png';
import ModalCard from '@components/Elements/ModalCard';
import arrow_right from '@assets/images/arrow_right.png';

export default function RealisationsSlider() {
  const { t } = useTranslation(); // Importation de la traduction

  const [myArray, setMyArray] = useState([]);

  const [classArr, setClassArr] = useState([]);
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [currentShow, setCurrentShow] = useState({});

  const navigate = useNavigate();

  const handleClickNavigate = (id) => {
    navigate(`/realisation/${id}`);
  };

  const handleHover = (type) => {
    setIsHover(type);
  };
  const handleClick = (type, index) => {
    setIsClick(type);
    if (index > 0) {
      setCurrentShow(myArray[index]);
    }
  };

  const changeSlide = (type) => {
    setTimeout(() => {
      setClassArr((prevArray) => {
        const newArray = [...prevArray];

        if (type === 1) {
          newArray.unshift(prevArray[prevArray.length - 1]);
          newArray.pop();
        } else {
          newArray.push(prevArray[0]);
          newArray.shift();
        }
        return newArray;
      });
    }, 0);
  };

  // Détextion de swap sur smartphone
  const touchStartX = useRef(null);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (deltaX > 50) {
      changeSlide(1);
    } else if (deltaX < -50) {
      changeSlide(2);
    }
  }

  useEffect(() => {
    let interval = null;

    if (!isHover) {
      interval = setInterval(() => {
        changeSlide(1);
      }, 300000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isHover, classArr]);

  useEffect(() => {
    instanceAxios()
      .get('data/realisations.json')
      .then((res) => {
        setMyArray(res.data);

        const prepArr = [];
        for (let i = 0; i < res.data.length; i++) {
          prepArr.push(`card${i + 1}`);
        }
        setClassArr(prepArr);
      })
      .catch(() => {});
  }, []);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section id="projects" className="realisationSlider">
      <h2>
        {t('home_projectSlider_t1', { defaultValue: 'Nos réalisations' })}
      </h2>
      <p>
        {t('home_projectSlider_t2', {
          defaultValue: 'Voici quelques-unes de nos missions',
        })}
      </p>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="slider"
      >
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => changeSlide(2)}
          onClick={() => changeSlide(2)}
          className="left"
        >
          <img src={chevron} alt="chevron" />
        </div>
        <div id="realisationSliderList" className="content">
          {myArray.map((e, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onKeyDown={() => handleClick(true, index)}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
              onClick={() => handleClick(true, index)}
              className={`card ${classArr[index]}`}
            >
              <div className="cardInner">
                <div className="recto">
                  <img alt={`Réalisation ${index + 1}`} src={e.imgFront} />
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => handleClickNavigate(e.id)}
                  onClick={() => handleClickNavigate(e.id)}
                  className="verso"
                >
                  <img alt={`Réalisation ${index + 1}`} src={e.imgBack} />
                  <div className="text">
                    <h2>{e.title}</h2>
                    {e.task.map((elem, i) => (
                      <p key={i}>{elem}</p>
                    ))}
                    <NavHashLink to={`/realisation/${e.id}#`}>
                      <span>
                        <img src={arrow_right} alt="fleche" />
                        {' '}
                        En savoir plus
                      </span>
                    </NavHashLink>
                  </div>
                </div>
                <div className="resp" />
              </div>
            </div>
          ))}

          {windowSize <= 900 && (
            <ModalCard
              handleClick={handleClick}
              classes={`type1 ${isClick ? 'show' : 'unshow'}`}
            >
              <img alt="réalisation" src={currentShow.imgBack} />
              <NavHashLink
                onClick={() => handleClick(false, 0)}
                to={`/realisation/${currentShow.id}#`}
              >
                <h2>
                  <img src={arrow_right} alt="fleche" />
                  {' '}
                  Voir la réalisation
                </h2>
              </NavHashLink>
              <div className="task">
                {currentShow.task
                  && currentShow.task.map((e, index) => <p key={index}>{e}</p>)}
              </div>
            </ModalCard>
          )}
        </div>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => changeSlide(1)}
          onClick={() => changeSlide(1)}
          className="right"
        >
          <img src={chevron} alt="chevron" />
        </div>
      </div>
    </section>
  );
}
