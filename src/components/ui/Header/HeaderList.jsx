import { Link } from 'react-router-dom';

import './Header.css';

import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

const HeaderList = ({ handleMenuClick, isMenuOpen }) => {
  const items = [
    { name: 'ГОЛОВНА', path: '/' },
    { name: 'ПРО НАС', path: '/aboutus' },
    { name: 'ЗАБРОНЮВАТИ', path: '/bookhouse' },
    { name: 'КОНТАКТИ', path: '/contacts' },
    { name: 'ОСОБИСТИЙ КАБІНЕТ', path: '/personaloffcie' },
  ];
  return (
    <div className="header-list">
      <ul className={isMenuOpen ? 'header-items active' : 'header-items'}>
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="header-item"
            onClick={handleMenuClick}
          >
            {item.name}
          </Link>
        ))}
      </ul>
      <LanguageSwitcher />
    </div>
  );
};

export { HeaderList };
