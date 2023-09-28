import { useEffect, useState } from 'react';
import '@assets/css/page/home/team.scss';
import Nicolas from '@assets/images/nicolas.png';
import Chandara from '@assets/images/chandara.png';
import prasath from '@assets/images/prasath.png';
import julien from '@assets/images/julien.png';
import elie from '@assets/images/elie.png';

import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation(); // Importation de la traduction

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [teamMembers, setTeamMembers] = useState([]);
  const [screenType, setScreenType] = useState(0);

  const [classList, setClassList] = useState([]);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setClassList((prevArr) => {
        const lastArr = [...prevArr];
        lastArr.unshift(prevArr[prevArr.length - 1]);
        lastArr.pop();
        return lastArr;
      });
    }, 2000);
    // 2000

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (
      (windowSize < 900 && screenType !== 2)
      || (windowSize > 900 && screenType !== 1)
      || screenType === 0
    ) {
      if (windowSize < 900) {
        setScreenType(2);
      }
      if (windowSize > 900) {
        setScreenType(1);
      }

      const prepArrMember = [];

      const fakeArrMemberArr = [
        {
          fullName: 'Prasath',
          img: prasath,
        },
        {
          fullName: 'Nicolas',
          img: Nicolas,
        },
        {
          fullName: 'Julien',
          img: julien,
        },
        {
          fullName: 'Élie',
          img: elie,
        },
        {
          fullName: 'Chandara',
          img: Chandara,
        },
      ];

      const fakeArrMember = windowSize < 900
        ? [...fakeArrMemberArr, ...fakeArrMemberArr]
        : fakeArrMemberArr;
      prepArrMember.push(...fakeArrMember);
      if (windowSize < 900) {
        prepArrMember.push(...fakeArrMember);
      }
      setTeamMembers(prepArrMember);

      const preArr = [];
      for (let i = 0; i < prepArrMember.length; i++) {
        preArr.push(`item${i}`);
      }
      setClassList(preArr);
    }
  }, [windowSize]);
  const showCalendar = () => {
    // eslint-disable-next-line no-undef
    Calendly.initPopupWidget({ url: 'https://calendly.com/visualandko/30min' });
    return false;
  };
  return (
    <section id="team" className="team">
      <h2>{t('home_team_t1', { defaultValue: 'Notre équipe qualifiée' })}</h2>
      <div className="teamPictures">
        {teamMembers.map((e, index) => (
          <img
            key={index}
            src={e.img}
            className={`picture ${windowSize < 900 ? classList[index] : ''}`}
            alt={e.fullName}
          />
        ))}
      </div>

      <div className="about_us">
        <p className="description_1">
          {t('home_team_t2', {
            defaultValue: "Visual & Ko est constituée d'une",
          })}
          {' '}
          <span className="span_1">
            {t('home_team_t3', {
              defaultValue: 'équipe de plusieurs développeurs expérimentés',
            })}
          </span>
          {' '}
          {t('home_team_t4', { defaultValue: "et d'" })}
          <span className="span_2">
            {t('home_team_t5', { defaultValue: 'experts en marketing' })}
          </span>
          .
        </p>

        <p className="description_2">
          {windowSize > 900 && (
            <>
              {t('home_team_t6', {
                defaultValue: 'Les projets sur lesquels nous travaillons sont',
              })}
              {' '}
              <strong>
                {t('home_team_t7', { defaultValue: 'complexes et ambitieux.' })}
              </strong>
            </>
          )}
          {t('home_team_t8', {
            defaultValue: 'Nous utilisons les technologies',
          })}
          {' '}
          <strong>
            {t('home_team_t9', { defaultValue: 'les plus modernes' })}
          </strong>
          {' '}
          {t('home_team_t10', {
            defaultValue: 'pour répondre aux besoins actuels de nos clients.',
          })}
        </p>

        <p className="description_3">
          {t('home_team_t11', {
            defaultValue:
              "Notre engagement envers l'excellence nous pousse à nous dépasser constamment et à chercher",
          })}
          {' '}
          <br />
          <span className="span_3">
            {' '}
            {t('home_team_t15', {
              defaultValue: 'les solutions les plus innovantes',
            })}
          </span>
          {' '}
          {t('home_team_t16', {
            defaultValue: 'pour offrir à nos clients les',
          })}
          <strong>
            {' '}
            {t('home_team_t14', { defaultValue: 'meilleurs résultats' })}
          </strong>
          {' '}
          {t('home_team_t15', { defaultValue: 'possibles.' })}
        </p>
      </div>

      <button onClick={() => showCalendar()} type="button">
        {t('home_team_t16', { defaultValue: 'Prenez rdv avec nos experts' })}
      </button>
    </section>
  );
}
