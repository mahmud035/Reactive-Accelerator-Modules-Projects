import AQIComponent from '@/components/AQIComponent';

const AQIPage = ({ searchParams: { latitude, longitude } }) => {
  return <AQIComponent lat={latitude} lon={longitude} />;
};

export default AQIPage;
