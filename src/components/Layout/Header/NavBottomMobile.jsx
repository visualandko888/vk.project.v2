import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from 'react-router-hash-link';

export default function NavBottomMobile() {
  return (
    <div className="bottomMobileFixed">
      {/* <div>
        <img src={logoMin} alt="Logo miniature" />
      </div> */}
      <div>
        <h2>Équipe Visual&KO</h2>
        <p>Une question? Contactez-nous</p>
        <div>
          <NavHashLink to="/#contact">
            <div>
              <FontAwesomeIcon className="faIcon" icon={faPenToSquare} />
              <span>Devis</span>
            </div>
          </NavHashLink>
          <NavHashLink to="tel:+33767744343">
            <div>
              <FontAwesomeIcon className="faIcon" icon={faPhone} />
              <span>Téléphone</span>
            </div>
          </NavHashLink>
        </div>
      </div>
    </div>
    // <div className="navBottomMobile">
    //   <div className="icoList">
    //     <NavHashLink to="/#">
    //       <FontAwesomeIcon className="faIcon" icon={faHouse} />
    //     </NavHashLink>
    //     <NavHashLink to="/#contact">
    //       <FontAwesomeIcon className="faIcon" icon={faPenToSquare} />
    //     </NavHashLink>
    //     <NavHashLink to="tel:+33767744343">
    //       {' '}
    //       <FontAwesomeIcon className="faIcon" icon={faPhone} />
    //     </NavHashLink>
    //     <NavHashLink onClick={() => showCalendar()} to="#">
    //       <FontAwesomeIcon className="faIcon" icon={faCalendarDay} />
    //     </NavHashLink>
    //   </div>
    // </div>
  );
}
