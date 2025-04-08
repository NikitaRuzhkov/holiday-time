import './Footer.css';

const Footer = () => {
  const time = new Date().getFullYear();
  return (
    <div className="footer">
      &copy; {time} HolidayTime.&nbsp; All rights reserved.
    </div>
  );
};

export { Footer };
