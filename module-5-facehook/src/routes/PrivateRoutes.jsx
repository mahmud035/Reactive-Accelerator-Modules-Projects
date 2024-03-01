import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../shared/Header';

const PrivateRoutes = ({ children }) => {
  const { auth } = useAuth();

  return (
    <>
      {auth?.user ? (
        <>
          <Header />
          <main className="mx-auto max-w-[1080px] py-8">
            <div className="container">{children}</div>
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
