import { useContext } from 'react';
import Header from '../components/header/Header';
import WeatherBoard from '../components/weather/WeatherBoard';
import { WeatherContext } from '../contexts/WeatherContext';

const HomePage = () => {
  const { loading } = useContext(WeatherContext);

  return (
    <>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <WeatherBoard />
          </main>
        </>
      )}
    </>
  );
};

export default HomePage;
