import { Outlet } from 'react-router-dom';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
