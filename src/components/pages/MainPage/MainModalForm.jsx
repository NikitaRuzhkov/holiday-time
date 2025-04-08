import { useEffect } from 'react';

import useScrollVisibility from '../../hooks/useScrollVisible';
import { MyInput } from '../../ui/MyInput/MyInput';

const MainModalForm = ({ openModal, isModalOpen, closeModal }) => {
  const isVisible = useScrollVisibility(500);
  useEffect(() => {
    if (!isModalOpen || !closeModal) return;

    const handleDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleDown);
    }

    return () => document.removeEventListener('keydown', handleDown);
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    document.documentElement.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <button
        className={`modal-button ${isVisible ? 'active' : ''}`}
        onClick={openModal}
      >
        Зворотній зв’язок
      </button>
      {isModalOpen && (
        <div
          className={`main-modal ${isModalOpen ? 'active' : ''}`}
          onClick={closeModal}
        >
          <form className="main-form" onClick={e => e.stopPropagation()}>
            <h1>Зворотній зв’язок</h1>
            <div className="form-content">
              <p>Ім’я</p>
              <MyInput placeholder="Введіть ім’я" />
              <p>Номер телефону</p>
              <MyInput placeholder="Введіть номер телефону" />
            </div>
            <button type="button" className="form-btn">
              Запросити виклик
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export { MainModalForm };
