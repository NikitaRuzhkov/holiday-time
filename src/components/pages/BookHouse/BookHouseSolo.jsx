import { useNavigate, useParams } from 'react-router-dom';

import { aboutItems } from '../../../data/aboutItems';
import { SectionTitile } from '../../ui/SectionTitle/SectionTitile';
import { BookCalendar } from './BookCalendar';
import { BookGrid } from './BookGrid';

import 'react-datepicker/dist/react-datepicker.css';

import { ScrollToTop } from '../../ui/ScrollToTop/ScrollToTop';
import { BookInfoPrice } from './BookInfoPrice';

const BookHouseSolo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const house = aboutItems.find(item => item.id === Number(id));

  return (
    <div className="booking">
      <SectionTitile>{house.mainTitle}</SectionTitile>
      <div className="container">
        <div className="booking-date">
          <BookGrid navigate={navigate} house={house} />
          <h1>Наявність місць</h1>
          <BookCalendar />
          <BookInfoPrice house={house} />
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export { BookHouseSolo };
