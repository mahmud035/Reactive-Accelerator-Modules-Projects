import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Registration from '../components/Auth/Registration';
import MainLayout from '../components/layout/MainLayout';
import ErrorPage from '../shared/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
