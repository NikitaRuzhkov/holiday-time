import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const BookGrid = ({ house, navigate }) => {
  return (
    <div className="booking-content">
      <div className="grid-container">
        <div className="box-one">
          {house.images.slice(0, 2).map((image, index) => (
            <img
              key={index}
              className="image-first-column"
              src={image}
              alt={image}
            />
          ))}
        </div>
        <div className="box-four">
          <div className="box-two">
            <p>{house.details}</p>
          </div>
          <div className="box-three">
            {house.images.slice(2, 4).map((image, index) => (
              <img
                key={index + 2}
                className="image-second-column"
                src={image}
                alt={image}
              />
            ))}
          </div>
        </div>
        <Link className="grid-btn" onClick={() => navigate(-1)}>
          <HiOutlineArrowNarrowLeft className="grid-link" />
          Назад
        </Link>
      </div>
    </div>
  );
};

export { BookGrid };
