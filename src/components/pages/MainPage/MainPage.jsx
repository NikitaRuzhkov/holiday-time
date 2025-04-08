import { useState } from 'react';

import '../../../index.css';

import { ScrollToTop } from '../../ui/ScrollToTop/ScrollToTop';

import './MainPage.css';

import { MainModalForm } from './MainModalForm';
import { MainPageAbout } from './MainPageAbout';
import { MainPageSlider } from './MainPageSlider';
import { MainPageTitle } from './MainPageTitle';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="main-page section">
      <div className="container">
        <MainPageTitle />
        <MainPageSlider />
        <MainPageAbout />
        <ScrollToTop />
        <MainModalForm
          openModal={openModal}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      </div>
    </section>
  );
};

export { MainPage };
