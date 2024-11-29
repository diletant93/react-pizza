import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter id"
        className="focus: s w-28 rounded-full px-4 py-4 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-white focus:ring-offset-1 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;

