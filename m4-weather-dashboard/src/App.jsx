import FavoriteProvider from './contexts/FavoriteContext';
import LocationProvider from './contexts/LocationContext';
import WeatherProvider from './contexts/WeatherContext';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavoriteProvider>
            <HomePage />
          </FavoriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
};

export default App;
