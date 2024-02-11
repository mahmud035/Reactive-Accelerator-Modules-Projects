import Header from '../components/header/Header';
import WeatherBoard from '../components/weather/WeatherBoard';
import FavoriteProvider from '../contexts/FavoriteContext';
import LocationProvider from '../contexts/LocationContext';
import WeatherProvider from '../contexts/WeatherContext';

const HomePage = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Header />
          <main>
            <WeatherBoard />
          </main>
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};

export default HomePage;
