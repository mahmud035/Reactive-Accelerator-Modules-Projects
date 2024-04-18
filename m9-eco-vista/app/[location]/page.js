import LocationInfo from '@/components/LocationInfo';

const LocationPage = ({ searchParams: { latitude, longitude } }) => {
  return <LocationInfo lat={latitude} lon={longitude} />;
};

export default LocationPage;
