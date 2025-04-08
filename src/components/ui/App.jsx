import '../../index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BookHouseSolo } from '../pages/BookHouse/BookHouseSolo';
import {
  AboutUs,
  BookHouse,
  Contacts,
  MainPage,
  PersonalOffice,
} from '../pages/pages';
import { Layout } from './Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/aboutus',
          element: <AboutUs />,
        },
        {
          path: '/bookhouse',
          element: <BookHouse />,
        },
        {
          path: '/bookhouse/:id',
          element: <BookHouseSolo />,
        },
        {
          path: '/contacts',
          element: <Contacts />,
        },
        {
          path: '/personaloffcie',
          element: <PersonalOffice />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
