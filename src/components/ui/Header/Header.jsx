import { GiHamburgerMenu } from 'react-icons/gi';

import { logoImg } from '../../../assets/images';

import './Header.css';

import { useEffect, useState } from 'react';

import { HeaderList } from './HeaderList';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    setIsSticky(window.screenY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={isSticky ? 'header sticky' : 'header'}>
      <img className="header-img" src={logoImg} alt={logoImg} />
      <div className="header-menu-btn" onClick={toogleMenu}>
        <GiHamburgerMenu />
      </div>
      <HeaderList handleMenuClick={handleMenuClick} isMenuOpen={isOpen} />
    </div>
  );
};

export { Header };
