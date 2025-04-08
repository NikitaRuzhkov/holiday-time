import { mainImgAbout } from '../../../assets/images';

const MainPageAbout = () => {
  return (
    <div className="main-page-about">
      <img src={mainImgAbout} alt={mainImgAbout} />
      <div className="main-about-text">
        <p>
          Активний відпочинок у нетипових лоцаціях. Незаймана природа та
          місцевий колорит подарують Вам незабутні враження.
        </p>
      </div>
    </div>
  );
};

export { MainPageAbout };
