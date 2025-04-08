import { useEffect, useState } from 'react';

import { languageImg } from '../../../assets/images';

import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const savedLanguage = localStorage.getItem('language') || 'UA';
  const [language, setLanguage] = useState(savedLanguage);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toogleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = lang => {
    setLanguage(lang);
    setIsOpen(false);
  };
  return (
    <div className="language">
      <img src={languageImg} alt={languageImg} />
      <div className="language-switcher">
        <button className="language-btn" onClick={toogleDropdown}>
          {language}
        </button>
        {isOpen && (
          <div className="language-dropdown">
            <button onClick={() => selectLanguage('UA')}>UA</button>
            <button onClick={() => selectLanguage('EN')}>EN</button>
          </div>
        )}
      </div>
    </div>
  );
};

export { LanguageSwitcher };
