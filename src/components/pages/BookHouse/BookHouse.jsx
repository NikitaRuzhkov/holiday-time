import '../../../index.css';

import { SectionTitile } from '../../ui/SectionTitle/SectionTitile';

import './BookHouse.css';

import { useState } from 'react';

import { aboutItems } from '../../../data/aboutItems';
import { ScrollToTop } from '../../ui/ScrollToTop/ScrollToTop';
import { BookItem } from './BookItem';
import { BookSelect } from './BookSelect';

const BookHouse = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const filteredItems = selectedLocation
    ? aboutItems.filter(item => item.location === selectedLocation)
    : aboutItems;
  return (
    <div>
      <SectionTitile> Забронювати будиночок</SectionTitile>
      <div className="container">
        <div className="bookhouse">
          <BookSelect setSelectedLocation={setSelectedLocation} />
          {filteredItems.map(item => (
            <BookItem key={item.id} item={item} />
          ))}
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export { BookHouse };
