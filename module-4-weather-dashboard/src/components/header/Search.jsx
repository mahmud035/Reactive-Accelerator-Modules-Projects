import { useContext, useState } from 'react';
import searchIcon from '../../assets/search.svg';
import { LocationContext } from '../../contexts/LocationContext';
import { getLocationByName } from '../../data/location-data';

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchedLocation = getLocationByName(searchTerm);
    setSelectedLocation({ ...fetchedLocation });
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center px-3 py-2 space-x-2 transition-all border-b group focus-within:bg-black/30 border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-xs text-white bg-transparent border-none outline-none placeholder:text-white md:text-base"
          type="search"
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </div>
    </form>
  );
};

export default Search;
