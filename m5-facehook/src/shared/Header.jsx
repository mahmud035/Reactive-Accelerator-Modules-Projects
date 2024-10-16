import { Link } from 'react-router-dom';
import homeIcon from '../assets/icons/home.svg';
import notification from '../assets/icons/notification.svg';
import logo from '../assets/images/logo.svg';
import Logout from '../components/auth/Logout';
import useGetUser from '../hooks/useGetUser';

const Header = () => {
  const user = useGetUser();

  // Show dummy image if user's avatar is not found
  const userNameFirstChar = user?.firstName?.slice(0, 1)?.toUpperCase();
  const userAvatar =
    user?.avatar !== null
      ? `${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`
      : `https://dummyimage.com/200x200&text=${userNameFirstChar}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Logo  */}
        <Link to="/">
          <img className="max-w-[100px] lg:max-w-[130px]" src={logo} />
        </Link>
        {/* nav links   */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={homeIcon} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <img src={notification} alt="Notification" />
          </button>

          <Logout />

          <Link to="/profile" className="flex-center !ml-8 gap-3">
            <span className="text-lg font-medium lg:text-xl">
              {user?.firstName}
            </span>
            <img
              className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px] rounded-full"
              src={userAvatar}
              alt="avatar"
            />
          </Link>
        </div>
        {/* nav links ends  */}
      </div>
    </nav>
  );
};

export default Header;
