import { useRef, useEffect, useState } from 'react';
import '@assets/css/page/home/Partenaires.scss';
import ads from '@assets/images/ads.png';
import sc from '@assets/images/sc.png';
import tg from '@assets/images/tg.png';
import gb from '@assets/images/gb.png';
import cg from '@assets/images/cg.png';
import ia from '@assets/images/ia.png';
import plesk from '@assets/images/plesk.png';
import git from '@assets/images/git.png';
import us from '@assets/images/us.png';

export default function Partenaires() {
  const [partenaireFinalList, setParenaireFinalList] = useState([]);

  const partenaireArr = [
    { src: ads, alt: 'google ads' },
    { src: sc, alt: 'search console' },
    { src: tg, alt: 'tag manager' },
    { src: ia, alt: 'instagram ads' },
    { src: plesk, alt: 'plesk' },
    { src: git, alt: 'gitub' },
    { src: us, alt: 'ubersuggest' },
    { src: gb, alt: 'google my business' },
    { src: cg, alt: 'cg' },
  ];

  useEffect(() => {
    const prepArr = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < partenaireArr.length; j++) {
        const prepItem = {
          id: i + 1,
          src: partenaireArr[j].src,
          alt: partenaireArr[j].alt,
        };
        prepArr.push(prepItem);
      }
    }
    setParenaireFinalList(prepArr);
  }, []);

  const elementRef = useRef(null);
  const [marginLeftPrestataire, setMarginLeftPrestataire] = useState(0);

  const checkPosition = () => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;
      setMarginLeftPrestataire(elementBottom - windowHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);

  return (
    <div className="partenaires">
      <div
        style={{
          marginLeft: marginLeftPrestataire, // Adjust this margin to control the element's position
        }}
        ref={elementRef}
        className="nos-outils"
      >
        {partenaireFinalList.map((e, index) => (
          <img key={index} src={e.src} alt={e.alt} />
        ))}
      </div>
    </div>
  );
}
