import '../../../index.css';
import './AboutUs.css';

import { aboutBg } from '../../../assets/images';
import { SectionTitile } from '../../ui/SectionTitle/SectionTitile';

const AboutUs = () => {
  return (
    <div className="about">
      <SectionTitile>Про нас</SectionTitile>
      <div className="container">
        <div className="about-content">
          <img src={aboutBg} alt={aboutBg} />
          <div className="about-top">
            <h1>HolidayTime</h1>
            <p>
              Відпочинок, емоції, враження, нетипові маршрути, неймовірні
              локації - це все про сільський еко-туризм в Україні
            </p>
          </div>
        </div>
        <div className="about-team">
          <p>
            Наша команда зібрала найколоритніші місця нашої країни саме для
            тебе. <br />
            <br />
            Місія нашої компанії подарувати незабутні враження та показати
            Україну з іншої сторони. Пройти разом з Вами лісовими стежками, щоб
            попоїсти свіжого карпатського сиру. Пірнути у каньйон та побачити
            занурене під товщу років село Бакота. Покататись на гандолах в
            “українській Венеції”.
            <br />
            <br /> Пізнати Україну разом!
          </p>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
