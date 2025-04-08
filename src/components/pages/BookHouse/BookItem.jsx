import { useState } from 'react';
import { Link } from 'react-router-dom';

import { startYellow, starWhite } from '../../../assets/images';
import { BookHouseSolo } from './BookHouseSolo';

const BookItem = ({ item }) => {
  const [isStarOn, setIsStarOn] = useState(false);
  const handleStarOn = () => {
    setIsStarOn(prev => !prev);
  };

  return (
    <div className="book-item">
      <img className="book-img" src={item.icon} alt={item.icon} />
      <img
        className="star"
        src={isStarOn ? startYellow : starWhite}
        onClick={handleStarOn}
      />
      <div className="book-content">
        <h1>{item.title}</h1>
        <p>{item.descrition}</p>
      </div>
      <Link
        to={`/bookhouse/${item.id}`}
        element={<BookHouseSolo />}
        type="button"
        className="book-btn"
      >
        Детальніше
      </Link>
    </div>
  );
};

export { BookItem };
