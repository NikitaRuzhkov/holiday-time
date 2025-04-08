import { personalImg } from '../../../assets/images';

import '../../../index.css';
import './PersonalOffice.css';

import { SectionTitile } from '../../ui/SectionTitle/SectionTitile';

const PersonalOffice = () => {
  return (
    <div>
      <SectionTitile>Особистий кабінет</SectionTitile>
      <div className="container">
        <div className="personal">
          <div className="personal-content">
            <div className="personal-left">
              <img src={personalImg} alt={personalImg} />
              <button className="personal-left-btn">Змінити аватар</button>
              <button className="personal-left-btn">Налаштування</button>
            </div>
            <div className="personal-info">
              <p>Петров Іван Іванович</p>
              <p>
                Стать:
                <span> чоловіча</span>
              </p>
              <p>
                Дата народження:
                <span> 10. 02. 1998</span>
              </p>
              <p>
                Мобільний телефон:
                <span> +38(097)346-72-50</span>
              </p>
              <p>
                Ел. пошта:
                <span> petrov@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="personal-logout">
            <button className="logout">Вийти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PersonalOffice };
