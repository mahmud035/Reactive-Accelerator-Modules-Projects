import WeatherComponent from '@/components/WeatherComponent';

const WeatherPage = ({ searchParams: { latitude, longitude } }) => {
  return <WeatherComponent lat={latitude} lon={longitude} />;
};

export default WeatherPage;
