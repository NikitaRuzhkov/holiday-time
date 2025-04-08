import '../../../index.css';

import { Map } from '../../ui/Map/Map';
import { SectionTitile } from '../../ui/SectionTitle/SectionTitile';

import './Contacts.css';

const Contacts = () => {
  const contacts = [
    {
      title: 'Телефон',
      text: '+38(097)119-89-83',
    },
    {
      title: 'Графік роботи',
      text: 'пн-пт 08:00-22:00, сб 09:00-21:00, вс 10:00-20:00',
    },
    {
      title: 'Ел. пошта',
      text: 'hello@gmail.com',
    },
    {
      title: 'Адреса офісу',
      text: 'м. Київ, вул. Малевича, буд. 4',
    },
  ];
  return (
    <div>
      <SectionTitile>Контакти</SectionTitile>
      <div className="container">
        <div className="contacts">
          {contacts.map((contact, index) => (
            <div key={index} className="contacts-info">
              <h4 className="contacts-title">{contact.title}</h4>
              <p className="contacts-text">{contact.text}</p>
            </div>
          ))}
          <Map />
        </div>
      </div>
    </div>
  );
};

export { Contacts };
