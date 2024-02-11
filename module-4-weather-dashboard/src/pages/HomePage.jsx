import Header from '../components/header/Header';
import WeatherBoard from '../components/weather/WeatherBoard';
import FavoriteProvider from '../contexts/FavoriteContext';
import WeatherProvider from '../contexts/WeatherContext';

const HomePage = () => {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <Header />
        <main>
          <WeatherBoard />
        </main>
      </FavoriteProvider>
    </WeatherProvider>
  );
};

export default HomePage;
