import DatePicker from 'react-datepicker';

import './BookingDatePicker.css';

const BookingDatePicker = ({
  label,
  startDate,
  selectedDate,
  setDate,
  endDate,
  placeholder,
}) => {
  return (
    <div className="calendar-box">
      <label>{label}</label>
      <DatePicker
        className="calendar"
        selected={selectedDate}
        onChange={setDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholder}
      />
    </div>
  );
};

export { BookingDatePicker };
