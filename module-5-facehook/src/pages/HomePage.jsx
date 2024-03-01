import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div>
      <p>HomePage</p>
      <Link to="/profile">Go to Profile Page</Link>
    </div>
  );
};

export default HomePage;
