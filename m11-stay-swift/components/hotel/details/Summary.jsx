import HotelSummaryInfo from '../HotelSummaryInfo';

const Summary = () => {
  return (
    <section className="py-4 mt-[100px]">
      <div className="container flex">
        <HotelSummaryInfo source="details" />
      </div>
    </section>
  );
};

export default Summary;
