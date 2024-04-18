import WindComponent from '@/components/WindComponent';

const WindPage = ({ searchParams: { latitude, longitude } }) => {
  return <WindComponent lat={latitude} lon={longitude} />;
};

export default WindPage;
