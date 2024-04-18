import TemperatureComponent from '@/components/TemperatureComponent';

const TemperaturePage = ({ searchParams: { latitude, longitude } }) => {
  return <TemperatureComponent lat={latitude} lon={longitude} />;
};

export default TemperaturePage;
