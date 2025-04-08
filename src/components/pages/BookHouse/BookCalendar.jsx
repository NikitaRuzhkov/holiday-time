import { useState } from 'react';

import { BookingDatePicker } from '../../ui/BookingDatePicker/BookingDatePicker';
import { NumberCounter } from '../../ui/NumberCounter/NumberCounter';

const BookCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(2);
  return (
    <div className="book-calendar">
      <h4 className="calendar-text">
        Коли б Ви хотіли зупинись в помешканні Полонини Карпат?
      </h4>
      <div className="caledar-content">
        <BookingDatePicker
          label="Дата заїзду"
          selectedDate={startDate}
          setDate={setStartDate}
          startDate={startDate}
          endDate={endDate}
          placeholder="Дата заїзду"
        />
        <BookingDatePicker
          label="Дата заїзду"
          selectedDate={endDate}
          setDate={setEndDate}
          startDate={startDate}
          endDate={endDate}
          placeholder="Дата виїзду"
        />
        <button className="calendar-btn">
          Перевірити наявність вільних місць
        </button>
      </div>
      <div className="calendar-number">
        <NumberCounter
          label="Номери"
          count={rooms}
          setCount={setRooms}
          min={1}
          max={5}
        />
        <NumberCounter
          label="Дорослі"
          count={adults}
          setCount={setAdults}
          min={1}
          max={5}
        />
        <NumberCounter
          label="Діти"
          count={children}
          setCount={setChildren}
          min={1}
          max={5}
        />
      </div>
    </div>
  );
};

export { BookCalendar };
