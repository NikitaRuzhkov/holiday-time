import { FaArrowRightLong } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';

import { aboutItems } from '../../../data/aboutItems';

const MainPageSlider = () => {
  return (
    <div className="main-page-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="client-swiper"
      >
        {aboutItems.map(item => (
          <SwiperSlide key={item.id}>
            <img className="slider-img" src={item.icon} alt={item.icon} />
            <div className="slider-content">
              <p>{item.descrition}</p>
              <Link className="slider-btn" to={`/bookhouse/${item.id}`}>
                Переглянути <FaArrowRightLong />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { MainPageSlider };
