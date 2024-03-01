import { Navigate } from 'react-router-dom';
import ProfileProvider from '../contexts/ProfileContext';
import useAuth from '../hooks/useAuth';
import Header from '../shared/Header';

const PrivateRoutes = ({ children }) => {
  const { auth } = useAuth();

  return (
    <>
      {auth?.authToken ? (
        <ProfileProvider>
          <Header />
          <main className="mx-auto max-w-[1024px] py-8">
            <div className="container">{children}</div>
          </main>
        </ProfileProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
