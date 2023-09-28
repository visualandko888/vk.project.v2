import '@assets/css/elements/modalCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ModalCard({ children, handleClick, classes }) {
  return (
    <div className={`modalCard ${classes}`}>
      <div className="content">
        <FontAwesomeIcon
          role="button"
          tabIndex={0}
          onKeyDown={() => handleClick(false, 0)}
          onClick={() => handleClick(false, 0)}
          className="faIcon"
          icon={faTimes}
        />
        {children}
      </div>
    </div>
  );
}
