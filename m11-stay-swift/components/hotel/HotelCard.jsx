import Image from 'next/image';
import HotelSummaryInfo from './HotelSummaryInfo';

const HotelCard = () => {
  return (
    <div className="flex gap-6 p-4 border rounded-md border-gray/20">
      <Image
        src="/images/image-1.png"
        className="max-h-[162px] max-w-[240px]"
        alt=""
        width={162}
        height={240}
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
