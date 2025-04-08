import './ScrollToTop.css';

import { arrowUp } from '../../../assets/images';
import useScrollVisibility from '../../hooks/useScrollVisible';

const ScrollToTop = () => {
  const isVisible = useScrollVisibility(500);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      className={`scrollToTop ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <img src={arrowUp} alt={arrowUp} />
    </button>
  );
};

export { ScrollToTop };
